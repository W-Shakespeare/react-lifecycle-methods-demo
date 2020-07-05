import React from "react";

export default function BookmarkComponent() {
  return (
    <div className="container">
      <div className="header clearfix">
        <nav></nav>
        <h3 className="text-muted">My Bookmarker</h3>
      </div>

      <div className="jumbotron">
        <h2>Bookmark your favorite Sites</h2>

        <form id="myForm">
          <div className="form-group">
            <label htmlFor="">Site Name</label>
            <input
              type="text"
              className="form-control"
              id="siteName"
              placeholder="Website Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Site URL</label>
            <input
              type="text"
              className="form-control"
              id="siteUrl"
              placeholder="Website URL"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="row marketing">
        <div className="col-lg-12">
          <div id="bookmarksResult"></div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2019 Bookmarker, Inc. | Developed by Rotimi Best</p>
      </footer>
    </div>
  );
}
