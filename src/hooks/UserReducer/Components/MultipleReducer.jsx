import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MultipleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
        <h1>{count2}</h1>
      </div>
    </>
  );
}

export default MultipleReducer;
