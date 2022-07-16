import React, { useEffect, useState } from "react";

function FunctionMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse is Changing");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(
    () => {
      console.log("mouse Position changed");
      window.addEventListener("mousemove", logMousePosition);

      //Wrinting cleanup function
      return () => {
        window.removeEventListener("mousemove", logMousePosition);
      };
    },

    []
  );

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default FunctionMouse;
