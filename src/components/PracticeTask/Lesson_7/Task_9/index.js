import React, { Component } from "react";
import { users } from "./users";
import User from "./User";
export default class PracticeTask_9_lesson_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users,
    };
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        {users.map((user) => {
          return (
            <User key={user.key} isAdmin={user.isAdmin} name={user.name} />
          );
        })}
      </div>
    );
  }
}
