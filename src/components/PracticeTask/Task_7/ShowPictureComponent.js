import React from "react";

export default function ShowPictureComponent({
  author,
  url,
  onImgChange,
  position,
}) {
  return (
    <div className="wrapper_ShowPictureComponent">
      <button onClick={() => onImgChange(position + 1)}>next</button>
      <div>
        <img src={url}></img>
        <p>{author}</p>
      </div>
      <button onClick={() => onImgChange(position - 1)}>prev</button>
    </div>
  );
}
