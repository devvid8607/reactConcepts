import { useState } from "react";

function useCounter(initialCount, setValue) {
  const [counter, setCounter] = useState(initialCount);
  const increment = () => {
    setCounter((prevCount) => prevCount + setValue);
  };
  const decrement = () => {
    setCounter((prevCount) => prevCount - setValue);
  };
  const reset = () => {
    setCounter(initialCount);
  };
  return [counter, increment, decrement, reset];
}

export default useCounter;
