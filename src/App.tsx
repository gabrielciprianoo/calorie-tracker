import { useEffect } from "react";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";
import ThemeToggle from "./components/ThemeToggle";
import { useActivity } from "./hooks/useActivity";

function App() {
  const { state, dispatch } = useActivity();

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestart = () =>state.activities.length;

  return (
    <>
      <header
        id="register"
        className="bg-gradient-to-r from-lime-600 to-emerald-600 py-4"
      >
        <div className="max-w-4xl mx-auto flex justify-between items-center px-5 gap-3">
          <h1 className="text-center text-xl font-bold text-white uppercase">
            Contador de Calorias
          </h1>

          <div className="flex items-center gap-3">
            <button
              className="uppercase bg-gray-800 p-3 rounded-lg text-white font-bold text-sm cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
              onClick={() => {
                dispatch({ type: "reset-app" });
              }}
              disabled={!canRestart()}
            >
              Reiniciar App
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-800 py-8 md:py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto">
            <CalorieTracker/>
        </div>

      </section>

      <section className="p-10 mx-auto max-w-4xl bg-white dark:bg-gray-800">
        <ActivityList />
      </section>
    </>
  );
}

export default App;
