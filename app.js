const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`My first app listening on port ${port}!`);
});
