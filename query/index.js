const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  cors({
    origin: "*",
  })
);

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    posts[postId].comments.push({ id, content });
  }

  res.send({});
});

app.listen(4002, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("listen on port 4002");
});
