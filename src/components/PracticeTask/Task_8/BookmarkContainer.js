import React from "react";
import BookmarkComponent from "./BookmarkComponent";
export default class BookmarkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteName: "", siteUrl: "", bookmarks: [] };
  }

  componentDidMount() {
    this.fetchBookmarks();
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  fetchBookmarks = () => {
    // Get bookmarks from LocalStorage and
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //Add to State
    this.setState({
      bookmarks: bookmarks,
    });
  };

  saveBookmark = (e) => {
    if (!this.validateForm(this.state.siteName, this.state.siteUrl)) {
      return false;
    }
    // Init bookmark array};
    let bookmark = {
      name: this.state.siteName,
      url: this.state.siteUrl,
    };

    if (localStorage.getItem("bookmarks") === null) {
      let bookmarks = [];
      // Add to array
      bookmarks.push(bookmark);
      // Add to State
      this.setState({
        bookmarks: [...this.state.bookmarks, bookmark],
      });

      // Set to LocalStorage
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      // Get bookmarks from LocalStorage
      var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

      // Add bookmarks to array
      bookmarks.push(bookmark);
      //Add to State
      this.setState({
        bookmarks: [...this.state.bookmarks, bookmark],
      });

      // Re-set back to LocalStorage
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    e.preventDefault();

    //A d new book then clear form
    this.setState({
      siteName: "",
      siteUrl: "",
    });
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

  deleteBookmark = (url) => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    let newBookmarks = bookmarks.filter(
      (bookmarkObj) => bookmarkObj.url !== url
    );
    this.setState({
      bookmarks: newBookmarks,
    });
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };
  render() {
    console.log(this.state);
    return (
      <BookmarkComponent
        siteName={this.state.siteName}
        siteUrl={this.state.siteUrl}
        onInputChange={this.onInputChange}
        bookmarks={this.state.bookmarks}
        saveBookmark={this.saveBookmark}
        deleteBookmark={this.deleteBookmark}
      />
    );
  }
}
