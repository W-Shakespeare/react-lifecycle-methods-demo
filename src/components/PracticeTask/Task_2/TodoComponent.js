import React from "react";

function TodoComponent({ todo, id }) {
  return <li key={id}>{todo}</li>;
}

export default TodoComponent;
