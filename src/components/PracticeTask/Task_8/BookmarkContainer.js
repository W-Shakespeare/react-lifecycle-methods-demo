import React from "react";
import BookmarkComponent from "./BookmarkComponent";
export default class BookmarkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteName: "", siteUrl: "", bookmarks: [] };
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  saveBookmark = (e) => {
    if (!this.validateForm(this.state.siteName, this.state.siteUrl)) {
      return false;
    }

    let bookmark = {
      name: this.state.siteName,
      url: this.state.siteUrl,
    };
    //Add new book then clear form
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      siteName: "",
      siteUrl: "",
    });
    // e.preventDefault();
  };
  validateForm = (siteName, siteUrl) => {
    if (!siteName || !siteUrl) {
      alert("Please fill the form");
      return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
      alert("Please use a valid url");
      return false;
    }

    return true;
  };

  render() {
    return (
      <BookmarkComponent
        siteName={this.state.siteName}
        siteUrl={this.state.siteUrl}
        onInputChange={this.onInputChange}
        bookmarks={this.state.bookmarks}
      />
    );
  }
}
