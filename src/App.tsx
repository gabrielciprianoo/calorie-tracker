import { useEffect, useReducer } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestart = () =>state.activities.length;

  return (
    <>
      <header id="register" className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="tex-center px-5 lg:px-0 text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>

          <button
            className="uppercase bg-gray-800 p-3 rounded-lg text-white font-bold text-sm cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
            onClick={() => {
              dispatch({ type: "reset-app" });
            }}
            disabled={!canRestart()}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-8 md:py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
            <CalorieTracker activities={state.activities}/>
        </div>

      </section>

      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
