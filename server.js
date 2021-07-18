const express = require("express");
const app = express();
const port = process.env.PORT || 3088;
const path = require("path");
const cors = require("cors");
const publicDirectoryPath = path.join(__dirname, "./public");
const routes = require("./routes/index");

app.use(cors());

app.use("/static", express.static(publicDirectoryPath));
app.get("/ping", (req, res) => res.send("Ok"));
app.use("/", routes);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

process.on("uncaughtException", () => {
  console.log("Uncaught exception");
});

app.listen(port, () => console.log(`Example app listening on port port!`));
