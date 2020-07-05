import React from "react";
import BookmarkComponent from "./BookmarkComponent";
export default class BookmarkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <BookmarkComponent />;
  }
}
