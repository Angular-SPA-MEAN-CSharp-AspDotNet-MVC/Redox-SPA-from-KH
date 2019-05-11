module.exports = function(app, db) {
  app.post("/source", (req, res) => {
    res.send("Hello. There are some sources.");
  });
  app.post("/message", (req, res) => {
    res.send("Hello. There are some messages.");
  });
};
