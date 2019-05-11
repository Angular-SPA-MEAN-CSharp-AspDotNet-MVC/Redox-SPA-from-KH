// server.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 8888;

require("./app/routes")(app, {});
app.listen(port, () => {
  console.log("Build up API on the port : " + port);
});
