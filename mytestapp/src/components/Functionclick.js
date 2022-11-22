import React from "react";

function Functionclick() {
  function clickHandler() {
    console.log("function button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Function</button>
    </div>
  );
}

export default Functionclick;
