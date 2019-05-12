const sqlite3 = require("sqlite3").verbose();

module.exports = function(app, db) {
  var db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE, err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the sqLite database");
    debugger;
  });

  let sourceRes = [];
  db.serialize(() => {
    db.each(
      `SELECT *
                 FROM source`,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        sourceRes.push(row);
      }
    );
  });
  app.post("/source", (req, res) => {
    res.send(sourceRes);
  });

  let messageRes = [];
  db.serialize(() => {
    db.each(
      `SELECT *
     FROM message`,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        messageRes.push(row);
      }
    );
  });
  app.post("/message", (req, res) => {
    res.send(messageRes);
  });
};
