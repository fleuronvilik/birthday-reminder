import React from "react";

function Person(props) {
  return (
    <li className="person">
      <img src={props.image} />
      <div>
        <h4>{props.name}</h4>
        <p>{props.age} years</p>
      </div>
    </li>
  );
}

export default Person