import React, { useEffect, useState } from "react";

function FunctionCounter1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default FunctionCounter1;
