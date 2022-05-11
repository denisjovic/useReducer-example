import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "toggleColor":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

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
    >
      <div>{state.count}</div>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "toggleColor" })}>
        Change Color
      </button>
      <input
        type='text'
        onChange={(e) =>
          dispatch({ type: "newUserInput", payload: e.target.value })
        }
      />
      <div>{state.userInput}</div>
    </div>
  );
}

export default App;
