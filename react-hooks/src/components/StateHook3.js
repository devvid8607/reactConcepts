//use state hook with an object
import React, { useState } from "react";

function StateHook3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>
      </div>
      <div>
        <h2>Your first name -{name.firstName}</h2>
      </div>
      <div>
        <h2>Your last name -{name.lastName}</h2>
      </div>
      <div>
        <h2>Your full name -{JSON.stringify(name)}</h2>
      </div>
    </div>
  );
}

export default StateHook3;
