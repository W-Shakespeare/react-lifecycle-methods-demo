import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()в,
    };
  }

  componentWillUnmount(){
clearInterval(this.timerId)
  }

  componentDidMount() {
    this.timerId= setInterval(() => {
      let date = new Date().toLocaleTimeString();
      this.setState({
        time: date,
      });
    });
  }

  render() {
    return <div>{`The time now is ${this.state.time}`}</div>;
  }
}

export default Clock;
