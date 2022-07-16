import React, { useContext } from "react";
import {counterContext} from "./ContextCounter";

function ComponentA() {
  const countContext = useContext(counterContext);
  return (
    <div>
      ComponentA
      <button onClick={() => countContext.dispatcher("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatcher("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatcher("reset")}>Reset</button>
      {/* <h1>{countContext.counter}</h1> */}
    </div>
  );
}

export default ComponentA;
