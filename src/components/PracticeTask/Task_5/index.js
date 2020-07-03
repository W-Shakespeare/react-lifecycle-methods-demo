import React, { Component } from "react";
import User from "./User";
export default class PracticeTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
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
        console.log(dataJson[0].title);
        this.setState({
          user: dataJson,
          loading: false,
        });
      });
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>...Loading</p>
        ) : (
          this.state.user.map((userObj) => {
            return (
              <User id={userObj.id} title={userObj.title} body={userObj.body} />
            );
          })
        )}
      </div>
    );
  }
}
