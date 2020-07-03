import React from "react";

function TodoComponent({ inputValue, handleChange, addTodo, arrTodo }) {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={handleChange} type="text" value={inputValue}></input>
        <button>Add</button>
      </form>
      <ul style={{ flexDirection: "column" }}>
        {arrTodo.map((objTodo) => {
          return <li key={objTodo.id}>{objTodo.todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoComponent;
