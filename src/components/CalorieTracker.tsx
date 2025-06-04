
import { useActivity } from "../hooks/useActivity";
import CalorieDisplay from "./CalorieDisplay";

export default function CalorieTracker() {

  const { caloriesBurned, caloriesConsumed, netCalories }= useActivity();  

  return (
    <>
      <h2 className="text-4xl font-black text-gray-800 dark:text-white text-center capitalize mb-6">
        resumen de calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-6">
        <CalorieDisplay calories={caloriesConsumed} text="consumidas" />
        <CalorieDisplay calories={caloriesBurned} text="ejercicio" />
        <CalorieDisplay calories={netCalories} text="diferencia" />

      </div>
    </>
  );
}
