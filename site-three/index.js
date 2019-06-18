const express = require("express");
const jwt = require("jsonwebtoken");
const secrets = require("./env");

const port = 5000;

const app = express();

app.use(express.static("static"));

const allowedEmails = ["david@test.com", "tom@test.com"];

app.get("/test", (req, res) => {
  const decoded = jwt.verify(req.query.token, secrets.secret);
  const authCheck = allowedEmails.includes(decoded.email);
  if (authCheck) {
    res.send(`thanks mate ${decoded.email}`);
  } else {
    res.send("not allowed");
  }
});

app.listen(port, () => console.log(`Site one listening on port ${port}!`));
