import React, { Component } from "react";
export default class PracticeTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxNumber: "",
      minNumber: "",
    };
  }
  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <input
          name="maxNumber"
          type="text"
          placeholder="max"
          value={this.state.maxNumber}
          onChange={this.onInputChange}
        />
        <input
          name="minNumber"
          type="text"
          placeholder="min"
          value={this.state.minNumber}
          onChange={this.onInputChange}
        />
        <p>{this.state.generate}</p>
      </div>
    );
  }
}
