import React from "react";
import Person from "./Person";

function NameLists() {
  const persons = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];
  const nameList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));

  return <div>{nameList}</div>;
}

export default NameLists;
