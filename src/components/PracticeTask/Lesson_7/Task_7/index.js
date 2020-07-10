import React, { Component } from "react";
export default class PracticeTask_7_lesson_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  render() {
    const { score } = this.state;
    return (
      <div>
        <h1>
          {score === 0
            ? "Do you need click on button"
            : score >= 1 && score <= 4
            ? "Your result is poor"
            : score >= 5 && score <= 7
            ? "Your result is average"
            : score >= 8 && score <= 10
            ? "Your result is excellent"
            : "Your result is excellent"}
        </h1>
        <button onClick={() => this.setState({ score: score + 1 })}></button>
      </div>
    );
  }
}
