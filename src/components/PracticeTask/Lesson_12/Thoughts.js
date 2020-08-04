import React, { useState, useEffect } from "react";
import Thought from "./Thought";
import "./style.css";
import axios from "axios";
function Thoughts() {
  const [textarea, setTextarea] = useState("");
  const [allThoughts, setAllThoughts] = useState([]);

  useEffect(() => {
    getThoughts();
  }, []);

  const getThoughts = () => {
    axios.get("/thoughts").then((res) => {
      console.log(res);
      setAllThoughts(res.data);
    });
  };

  const onTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const addThought = (e) => {
    e.preventDefault();
    let newComment = {
      id: Date.now(),
      dateCreate: new Date().toLocaleString(),
      like: 0,
      dislike: 0,
      text: textarea,
    };
    axios
      .post("/thoughts", newComment)
      .then((res) => {
        getThoughts();
      })
      .catch((er) => console.log(er));
  };

  const deleteThought = (id) => {
    axios.delete("/thoughts?id=" + id).then((res) => getThoughts());
  };

  const editedText = (id, text, dateCreate) => {
    axios
      .put("/thoughts_edit_text", { id, text, dateCreate })
      .then((res) => {
        getThoughts();
      })
      .catch((er) => console.log(er));
  };

  //Change like and dislike only one function not two
  const changeLike = (id, like, dislike) => {
    axios
      .put("/thoughts_like_dislike", {
        id,
        like,
        dislike,
      })
      .then((res) => {
        getThoughts();
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <div className="wrapper">
      <div className="wrapper-comment">
        {allThoughts.map((thoughtObj) => {
          return (
            <Thought
              key={thoughtObj.id}
              id={thoughtObj.id}
              text={thoughtObj.text}
              dateCreate={thoughtObj.dateCreate}
              like={thoughtObj.like}
              dislike={thoughtObj.dislike}
              deleteThought={deleteThought}
              editedText={editedText}
              changeLike={changeLike}
            />
          );
        })}
      </div>
      <div className="other">
        <form onSubmit={addThought}>
          <textarea
            name="textarea"
            onChange={onTextareaChange}
            value={textarea}
            required={true}
          ></textarea>
          <button className="btn">Добавить мысль</button>
        </form>
      </div>
    </div>
  );
}

export default Thoughts;
