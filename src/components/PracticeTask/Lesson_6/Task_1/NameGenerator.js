import React from "react";

class NameGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrName: ["Kirill", "Anna", "Zhenya", "Oleg", "Kolya", "Vitalik"],
      currentName: "Kirill",
    };
  }
  ChangeName = () => {
    let rand = 0 + Math.random() * (5 - 0);
    let newPosition = Math.round(rand);
    this.setState({
      currentName: this.state.ArrName[newPosition],
    });
    console.log(newPosition);
  };
  render() {
    return (
      <div className="wrapper">
        <h1>{this.state.currentName}</h1>
        <button onClick={this.ChangeName}>Change name</button>
      </div>
    );
  }
}
export default NameGenerator;
