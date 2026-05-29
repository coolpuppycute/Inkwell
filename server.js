const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let messages = [];

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});