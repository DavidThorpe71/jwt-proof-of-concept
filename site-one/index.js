const express = require("express");
const jwt = require("jsonwebtoken");
const secrets = require("./env");

const port = 3000;

const app = express();

app.use(express.static("static"));

const allowedEmails = ["david@test.com", "tom@test.com"];

app.get("/test", (req, res) => {
  const decoded = jwt.verify(req.query.auth, secrets.secret);
  const authCheck = allowedEmails.includes(decoded.email);
  if (authCheck) {
    res.redirect(`http://localhost:5000/test?token=${req.query.auth}`);
  } else {
    res.send("not allowed");
  }
});

app.listen(port, () => console.log(`Site one listening on port ${port}!`));
