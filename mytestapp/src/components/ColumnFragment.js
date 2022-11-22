import React from "react";

function ColumnFragment() {
  const persons = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];
  return persons.map((person) => (
    <React.Fragment key={person.id}>{person.name}</React.Fragment>
  ));
  // <React.Fragment>
  //   <td>Name</td>
  //   <td>Vidhya</td>
  // </React.Fragment>
}

export default ColumnFragment;
