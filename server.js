const express = require("express");
const port = 3001;
const app = express();

app.use(express.json());

let thoughts = [
  {
    id: Date.now(),
    dateCreate: new Date().toLocaleString(),
    like: 0,
    dislike: 0,
    text: `Судьба шепчет воину, что приближается буря, воин шепчет в ответ: "Я и есть буря..."`,
  },
];

app.get("/thoughts", (req, res) => {
  res.json(thoughts);
});

app.delete("/thoughts", (req, res) => {
  thoughts = thoughts.filter((item) => !(item.id == req.query.id));
  res.json(thoughts);
});

app.post("/thoughts", (req, res) => {
  thoughts = [req.body, ...thoughts];
  res.json(thoughts);
});

app.put("/thoughts_like_dislike", (req, res) => {
  const { like, dislike, id } = req.body;
  thoughts = thoughts.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        like,
        dislike,
      };
    } else {
      return item;
    }
  });
  res.json(thoughts);
});

app.put("/thoughts_edit_text", (req, res) => {
  const { id, text, dateCreate } = req.body;
  thoughts = thoughts.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        text,
        dateCreate,
      };
    } else {
      return item;
    }
  });
  res.json(thoughts);
});

app.listen(port, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`сервер запущен на ${port}`);
});
