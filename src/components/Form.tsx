import { categories } from "../data/categories";

export default function Form() {
  return (
    <form
      className="space-y-4 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label 
                htmlFor="category"
                className=" font-bold"
            >
                Categoria
            </label>
            <select
                className="border border-slate-300 p-2 rounded-lg  w-full bg-white"
                id="category"           
            >
                {
                    categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                        
                    ))
                }
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label 
                htmlFor="activity"
                className=" font-bold"
            >
                Actividad
            </label>

            <input
                type="text"
                name="activity" 
                id="activity" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ejemplo: Correr 5km, Jugo de Naranja, etc."
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label 
                htmlFor="calories"
                className=" font-bold"
            >
                Calorias
            </label>

            <input
                type="number"
                name="calories" 
                id="calories" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias Ejemplo: 500"
            />
        </div>

        <input
         type="submit"
         value="Guardar comida o Ejercicio"
         className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-200 w-full"
        />
    </form>
  );
}
