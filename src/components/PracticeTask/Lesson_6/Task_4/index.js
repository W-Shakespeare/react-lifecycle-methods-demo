import React, { Component } from "react";
export default class PracticeTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxNumber: "",
      minNumber: "",
      generate: null,
    };
  }
  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  generateRandomNumber = () => {
    const { maxNumber, minNumber } = this.state;
    this.setState({
      generate: Math.floor(Math.random() * (maxNumber - minNumber) + minNumber),
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
        <button onClick={this.generateRandomNumber}></button>
        <p>{this.state.generate}</p>
      </div>
    );
  }
}
