import React from "react";
import { useState } from "react";
import useInput from "./useInput";

function UserForm() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, resetFirstName, bindFirstName] = useInput("");
  const [lastName, resetLastName, bindLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello  ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName}></input>
        </div>
        <div>
          <button type="submit">Click</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
