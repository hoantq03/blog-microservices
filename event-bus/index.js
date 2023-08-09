const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log(type);
  console.log(data);
  if (type === "CommentCreated") {
    await axios.post("http://localhost:4001/events", { type, ...data });
  }
  if (type === "PostCreated") {
    await axios.post("http://localhost:4000/events", { type, ...data });
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
