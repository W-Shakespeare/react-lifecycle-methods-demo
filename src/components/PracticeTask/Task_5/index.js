import React, { Component } from "react";
import User from "./User";
export default class PracticeTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.getUsersDataFromServer();
  }
  getUsersDataFromServer = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((dataJson) => {
        this.setState({
          user: dataJson,
        });
      });
  };
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}
