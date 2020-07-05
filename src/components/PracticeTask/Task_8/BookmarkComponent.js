import React from "react";

export default function BookmarkComponent({
  siteName,
  siteUrl,
  onInputChange,
  bookmarks,
}) {
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
              onChange={onInputChange}
              value={siteName}
              id="siteName"
              name="siteName"
              placeholder="Website Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Site URL</label>
            <input
              type="text"
              className="form-control"
              onChange={onInputChange}
              value={siteUrl}
              id="siteUrl"
              name="siteUrl"
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
          <div id="bookmarksResult">
            {bookmarks.map((boormarkObj) => {
              <div class="well">
                <h3>
                  {boormarkObj.name}
                  <a
                    class="btn btn-default"
                    target="_blank"
                    href={boormarkObj.url}
                  >
                    Visit
                  </a>
                  <a onclick={deleteBookmark} class="btn btn-danger" href="#">
                    Delete
                  </a>
                </h3>
              </div>;
            })}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2019 Bookmarker, Inc. | Developed by Rotimi Best</p>
      </footer>
    </div>
  );
}
