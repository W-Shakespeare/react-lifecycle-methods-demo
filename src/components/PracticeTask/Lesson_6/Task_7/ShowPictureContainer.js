import React, { Component } from "react";
import ShowPictureComponent from "./ShowPictureComponent";
export default class ShowPictureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      currentImg: 28,
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

  onImgChange = (position) => {
    position = position < 0 ? 29 : position > 29 ? 0 : position;
    this.setState({
      currentImg: position,
    });
  };
  render() {
    return (
      <div className="wrapper">
        {this.state.loading ? (
          <p>...Loading</p>
        ) : (
          <ShowPictureComponent
            onImgChange={this.onImgChange}
            position={this.state.currentImg}
            author={this.state.user[this.state.currentImg].author}
            url={this.state.user[this.state.currentImg].download_url}
          />
        )}
      </div>
    );
  }
}
