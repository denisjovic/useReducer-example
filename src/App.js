import "./App.css";
import { useReducer } from "react";
import { reducer } from "./utils/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });
  return (
    <div
      style={{
        backgroundColor: state.color ? "#fff" : "#000",
        color: state.color ? "#000" : "#fff",
      }}
      className='app w-auto h-auto m-0 p-0'
    >
      <div className='p-0 m-0 bg-slate-800 flex flex-col justify-center items-center	'>
        <div className=''>
          <button
            className='px-5 py-2 text-white hover:opacity-30 bg-yellow-500'
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
          <button
            className='px-5 py-2 text-white hover:opacity-30 bg-yellow-500 mx-10'
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
        </div>
        <button
          className='px-5 py-2 text-white hover:opacity-30'
          onClick={() => dispatch({ type: "toggleColor" })}
        >
          Change Color
        </button>
        <input
          className='text-slate-800'
          type='text'
          onChange={(e) =>
            dispatch({ type: "newUserInput", payload: e.target.value })
          }
        />
        <h1 className='text center text-white text-7xl p-0 my-10'>
          {state.count}
        </h1>

        <h1 className='text-center text-8xl text-white'>{state.userInput}</h1>
      </div>
    </div>
  );
}

export default App;
