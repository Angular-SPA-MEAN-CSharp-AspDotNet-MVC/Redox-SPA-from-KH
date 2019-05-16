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

  let msgScrJoinRes = [];
  db.serialize(() => {
    db.each(
      `SELECT message.message, message.status,
              source.name, source.environment,
              source.id, message.source_id
       FROM message
       JOIN source On
          message.source_id = source.id
     `,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        msgScrJoinRes.push(row);
      }
    );
  });

  // Important! This portion is used to allow CORS (Cross Origin) request
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/source", (req, res) => {
    res.send(sourceRes);
  });

  app.get("/message", (req, res) => {
    res.send(messageRes);
  });

  app.get("/source/:id", (req, res) => {
    const id = req.params.id;
    let sourceWithIDRes = sourceRes.filter(function(item) {
      return item.id === id;
    });
    res.send(sourceWithIDRes);
  });

  app.get("/message/:mid", (req, res) => {
    const mid = req.params.mid;
    let messageWithIDRes = messageRes.filter(function(item) {
      return item.id === mid;
    });
    res.send(messageWithIDRes);
  });

  app.get("/source/:id/message", (req, res) => {
    const id = req.params.id;
    let innerJoinRes = msgScrJoinRes.filter(item => {
      return item.id === id;
    });
    res.send(innerJoinRes);
  });
};
