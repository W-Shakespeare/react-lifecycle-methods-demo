import React, { Component } from "react";
import Info from "./Info";
import Error from "./Error";
import Warning from "./Warning";
function Notification({ notification, type }) {
  let result;
  switch (type) {
    case "info":
      result = <Info text={notification.text} />;
      break;
    case "warning":
      result = <Warning text={notification.text} />;
      break;
    case "error":
      result = <Error text={notification.text} />;
      break;
    default:
      result = null;
      break;
  }

  return <div>{result}</div>;
}
export default Notification;
