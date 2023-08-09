const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;
  const { type } = event;

  if (type === "CommentCreated") {
    await axios.post("http://localhost:4001/events", event);
  }
  if (type === "PostCreated") {
    await axios.post("http://localhost:4000/events", event);
  }

  res.send({ status: "OK" });
});

app.listen(4005, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`listen on port 4005`);
});
