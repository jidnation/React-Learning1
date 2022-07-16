import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const initialState = 0;
export const counterContext = React.createContext();
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

function ContextCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <counterContext.Provider value={{ counter: count, dispatcher: dispatch }}>
      <div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <h1>{count}</h1>
      </div>
    </counterContext.Provider>
  );
}

export default ContextCounter;
