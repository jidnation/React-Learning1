import React, { useState } from "react";
import FunctionMouse from "./FunctionMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {
        display && <FunctionMouse/>
      }
    </div>
  );
}

export default MouseContainer;
