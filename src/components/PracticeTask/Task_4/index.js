import React, { Component } from "react";
export default class PracticeTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxNumber: "",
      minNumber: "",
    };
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="max" value={this.state.maxNumber} />
        <input type="text" placeholder="min" value={this.state.minNumber} />
        <p>{this.state.generate}</p>
      </div>
    );
  }
}
