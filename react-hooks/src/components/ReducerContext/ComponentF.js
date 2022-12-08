import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF - {countContext.countValue}
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

export default ComponentF;
