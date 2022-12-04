//side effects in functional components
//capable of handling componentdidmount,componentdidupdate, componentdidunmount
import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //called everytime there is a render
  useEffect(() => {
    console.log("here");
    document.title = `You clicked ${count} times `;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName({ name: e.target.value })}
      ></input>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
}

export default UseEffect1;
