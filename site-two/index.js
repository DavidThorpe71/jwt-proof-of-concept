const express = require("express");
const path = require("path");
const port = 4000;
const jwt = require("jsonwebtoken");
const secrets = require("./env");

const app = express();

app.get("/", (req, res) => {
  const token = jwt.sign({ email: "david@test.com" }, secrets.secret);

  res.sendFile("index.html", {
    root: path.join(__dirname, "./static")
  });
});

app.get("/test", (req, res) => res.send("yep"));

app.listen(port, () => console.log(`Site one listening on port ${port}!`));
