import React, { useEffect, useRef, useState } from "react";

function FunctionTimer() {
  const [timer, setTimer] = useState(0);

  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(
      () => setTimer((prevState) => prevState + 1),
      1000
    );
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div>
      <h3>Function Timer - {timer}</h3>
      <button onClick={() => clearInterval(timerRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default FunctionTimer;
