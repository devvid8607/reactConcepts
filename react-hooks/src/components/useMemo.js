import React, { useState } from "react";
import { useMemo } from "react";

function UseMemo() {
  const [counterone, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterone + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    return counterone % 2 === 0;
  }, [counterone]);

  return (
    <div>
      <div>
        <button onClick={incrementCounterOne}>Count one-{counterone}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCounterTwo}>Count two -{counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemo;
