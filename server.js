// server.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 8888;

// To enable Express process URL encoded forms on my own
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes")(app, {});
app.listen(port, () => {
  console.log("Start APIs on the port : " + port);
});
