import React from "react";

export default function User({ id, title, body }) {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <p>
        <strong>Id: </strong>
        {id}
      </p>
      <p>
        <strong>Title: </strong>
        {title}
      </p>
      <p>
        <strong>Body: </strong>
        {body}
      </p>
    </div>
  );
}
