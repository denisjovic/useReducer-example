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
        width: "100%",
        height: "600px",
      }}
      className='app'
    >
      <div className='p-0 m-0 bg-slate-800	'>
        <div className=''>
          <h1>{state.count}</h1>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
        <button onClick={() => dispatch({ type: "toggleColor" })}>
          Change Color
        </button>
        <input
          type='text'
          onChange={(e) =>
            dispatch({ type: "newUserInput", payload: e.target.value })
          }
        />
        <h1>{state.userInput}</h1>
      </div>
    </div>
  );
}

export default App;
