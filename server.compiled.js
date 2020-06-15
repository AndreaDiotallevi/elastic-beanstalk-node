"use strict";

var express = require("express");

var app = express();
app.get("/flowers", function (req, res) {
  console.log("here");
  res.json({
    ok: "ok"
  });
});
app.use(express["static"](path.join(__dirname, "client", "build")));
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening to port ".concat(port));
});
