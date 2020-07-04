import React, { Component } from "react";
export default class ShowPictureContainer extends Component {
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
    let url = "https://picsum.photos/v2/list";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((dataJson) => {
        console.log(dataJson);
        this.setState({
          user: dataJson,
          loading: false,
        });
      });
  };
  render() {
    return (
      <div className="wrapper">
        {this.state.loading ? (
          <p>...Loading</p>
        ) : (
          <div>
            <img src={this.state.user[0].download_url}></img>
            <p>{this.state.user[0].author}</p>
          </div>
        )}
      </div>
    );
  }
}
