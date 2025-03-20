import { Activity } from "../types";
import { categories } from "../data/categories";
import { categoryColors } from "../data/colors";
import { PencilSquareIcon } from "@heroicons/react/24/outline"

type ActivityListProps = {
  activities: Activity[];
};
export default function ActivityList({ activities }: ActivityListProps) {
  const categoryName = (category: Activity["category"]) => {
    const foundCategory = categories.find(
      (temporalCategory) => temporalCategory.id === category
    );
    return foundCategory ? foundCategory.name : "";
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities.length === 0 && (
        <div className="flex flex-col justify-center gap-4 items-center mt-10 text-lg">
          <p className="text-center text-lg text-slate-500">
            No hay actividades registradas
          </p>

          <a className="text-lime-600 text-sm" href="#register">
            Registra Tu Primera Actividad
          </a>
        </div>
      )}

      {activities.map((activity) => (
        
        <div
          key={activity.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${categoryColors[activity.category]}`}
            >
              {categoryName(activity.category)}
            </p>
            <p className="text-2xl capitalize font-bold pt-5">{activity.name}</p>
            <p className="font-black text-4xl text-lime-500 text capitalize">
              {activity.calories} {""}
              <span>Calorias</span>
            </p>
          </div>

          <div className="flex gap-5 items-center">
             <PencilSquareIcon 
                className="h-8 w-8 text-gray-800 cursor-pointer"
             />
          </div>
        </div>
      ))}
    </>
  );
}
