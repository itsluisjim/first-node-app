const path = require("node:path");
const express = require("express");
const app = express();

const homePath = /^\/(home)?$/;

app.get(homePath, function (req, res) {
  if (res.statusCode == 404) {
    return res.sendFile(path.join(__dirname, "404.html"));
  }

  return res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/about", function (req, res) {
  if (res.statusCode == 404) {
    return res.sendFile(path.join(__dirname, "404.html"));
  }

  return res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", function (req, res) {
  if (res.statusCode == 404) {
    return res.sendFile(path.join(__dirname, "404.html"));
  }
  return res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("*", function (req, res) {
  res.status(404);
  return res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(8080);
