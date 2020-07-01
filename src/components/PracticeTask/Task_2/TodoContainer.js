import React, { Component } from "react";
import TodoComponent from "./TodoComponent";
class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: [{ id: Date.now(), todo: "First Todo" }],
    };
  }
  render() {
    return (
      <div>
        <TodoComponent />
      </div>
    );
  }
}
export default TodoContainer;
