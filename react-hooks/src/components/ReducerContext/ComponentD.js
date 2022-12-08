import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentD- {countContext.countValue}
      <button onClick={() => countContext.dispatchValue("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatchValue("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatchValue("reset")}>Reset</button>
    </div>
  );
}

export default ComponentD;
