import { categories } from "../data/categories";
import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Activity } from "../types";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

type formProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};

export default function Form({ dispatch, state }: formProps) {
  const initialState: Activity = {
    id: uuid(),
    category: 1,
    name: "",
    calories: 0,
  };
  const [activity, setActivity] = useState<Activity>(initialState);

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.find(
        (stateActivity) => stateActivity.id === state.activeId
      );

      if (selectedActivity) {
        setActivity(selectedActivity);
      }
    }
  }, [state.activeId, state.activities]);

  const handleOnChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(event.target.id);
    setActivity({
      ...activity,
      [event.target.name]: isNumberField
        ? +event.target.value
        : event.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({ ...initialState, id: uuid() });
  };

  return (
    <form
      className="space-y-4 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className=" font-bold">
          Categoria
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg  w-full bg-white"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={activity.category}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className=" font-bold">
          Actividad
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ejemplo: Correr 5km, Jugo de Naranja, etc."
          value={activity.name}
          onChange={handleOnChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=" font-bold">
          Calorias
        </label>

        <input
          type="number"
          name="calories"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias Ejemplo: 500"
          value={activity.calories}
          onChange={handleOnChange}
        />
      </div>

      <input
        type="submit"
        value={activity.category === 1 ? "Agregar Comida" : "Agregar Ejercicio"}
        className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-200 w-full uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!isValidActivity()}
      />
    </form>
  );
}
