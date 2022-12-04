import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("logging mouse position");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("in useeefect");
    window.addEventListener("mouseover", logMousePosition);
  }, []);

  return (
    <div>
      X - {x} and Y - {y}
    </div>
  );
}

export default UseEffect2;
