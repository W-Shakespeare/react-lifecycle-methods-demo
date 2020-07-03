import React, { Component } from "react";
import TodoComponent from "./TodoComponent";
class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: [{ id: Date.now(), todo: "First Todo" }],
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    let obj = {
      id: Date.now(),
      todo: this.state.inputValue,
    };
    this.setState({
      arrTodo: [...this.state.arrTodo, obj],
      inputValue: "",
    });
  };

  deleteTodo = (id) => {
    this.state({
      arrTodo: this.state.arrTodo.filter((obj) => obj.id !== id),
    });
  };

  render() {
    return (
      <div>
        <TodoComponent
          arrTodo={this.state.arrTodo}
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
