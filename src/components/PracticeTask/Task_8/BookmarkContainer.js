import React from "react";
import BookmarkComponent from "./BookmarkComponent";
export default class BookmarkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteName: "", siteUrl: "" };
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <BookmarkComponent
        siteName={this.state.siteName}
        siteUrl={this.state.siteUrl}
        onInputChange={this.onInputChange}
      />
    );
  }
}
