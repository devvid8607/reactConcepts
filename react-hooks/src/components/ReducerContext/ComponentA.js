import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentA- {countContext.countValue}
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

export default ComponentA;
