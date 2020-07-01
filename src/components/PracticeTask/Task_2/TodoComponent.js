import React from "react";

function TodoComponent({ todo, id, inputValue, handleChange }) {
  return (
    <div>
      <input onChange={handleChange} type="text" value={inputValue}></input>
      <li key={id}>{todo}</li>;
    </div>
  );
}

export default TodoComponent;
