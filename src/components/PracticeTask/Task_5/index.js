import React, { Component } from "react";
import User from "./User";
export default class PracticeTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}
