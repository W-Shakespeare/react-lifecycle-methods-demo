import React from "react";
import { todos } from "./todos";
import "./style.css";
const Todo = ({ key, classname, text }) => {
  return (
    <p key={key} className={classname}>
      {text}
    </p>
  );
};

export default class PracticeTask_5_lesson_7 extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo</h2>
        {todos.map((todo) => {
          return (
            <Todo key={todo.key} classname={todo.status} text={todo.text} />
          );
        })}
      </div>
    );
  }
}
