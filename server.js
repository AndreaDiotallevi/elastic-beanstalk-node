const express = require("express");

const app = express();

app.get("/flowers", (req, res) => {
  console.log("here");
  res.json({ ok: "ok" });
});

app.use(express.static(path.join(__dirname, "client", "build")));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
