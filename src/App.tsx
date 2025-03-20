import { useReducer } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (  
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="tex-center px-5 lg:px-0 text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-500 py-8 md:py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} />
        </div>
      </section>
    </>
  );
}

export default App;
