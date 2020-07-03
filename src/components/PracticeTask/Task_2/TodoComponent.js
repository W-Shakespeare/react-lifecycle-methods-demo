import React from "react";

function TodoComponent({
  inputValue,
  handleChange,
  addTodo,
  arrTodo,
  deleteTodo,
}) {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={handleChange} type="text" value={inputValue}></input>
        <button>Add</button>
      </form>
      <ul style={{ flexDirection: "column" }}>
        {arrTodo.map((objTodo) => {
          return (
            <div>
              <li key={objTodo.id}>{objTodo.todo}</li>
              <button onClick={() => deleteTodo(objTodo.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoComponent;
