import React, { Component } from "react";
import { notifications } from "./notifications";
import Notification from "./Notification";
import "./style.css";
export default class PracticeTask_10_lesson_7 extends Component {
  render() {
    return (
      <div>
        <h2>User List</h2>
        {notifications.map((notification) => {
          return (
            <Notification
              notification={notification}
              type={notification.notificationType}
            />
          );
        })}
      </div>
    );
  }
}
