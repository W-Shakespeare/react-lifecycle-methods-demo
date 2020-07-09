import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";

export default class PracticeTask_1_lesson_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogget: false,
    };
  }

  render() {
    const { isLogget } = this.state;
    return (
      <div>
        <h1>{isLogget ? "You are logged in" : "You are not logget in"}</h1>
        <button onClick={() => this.setState({ isLogget: !isLogget })}>
          {isLogget ? (
            <>
              logout <FontAwesomeIcon icon={faLock} />
            </>
          ) : (
            <>
              login <FontAwesomeIcon icon={faUnlock} />
            </>
          )}
        </button>
      </div>
    );
  }
}
