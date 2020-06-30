import React, { Component } from "react";

import Welcome from "./Welcome";
import Clock from "./Clock";

export default class PracticeTask extends Component {
  render() {
    return (
      <div>
        <Welcome name="Kirill" />
        <Clock />
      </div>
    );
  }
}
