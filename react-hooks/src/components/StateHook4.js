//use state with array
import React, { useState } from "react";

function StateHook4() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random(),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add an item</button>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StateHook4;
