import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./Caloriedisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {

  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + +activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + +activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories = useMemo(
    ()=> caloriesConsumed - caloriesBurned,[caloriesBurned,caloriesConsumed]
  )

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center capitalize">
        resumen de calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="consumidas"/>
        <CalorieDisplay calories={caloriesBurned} text="ejercicio"/>
        <CalorieDisplay calories={netCalories} text="diferencia"/>
        
      </div>
    </>
  );
}
