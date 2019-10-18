const http = require("http");
const service = require("./route");
let users = require("./testdb.json");
let server = http.createServer();

server.on("request", (req, res) => {
  let { url, method, headers } = req;

  // handle request error
  req.on("error", err => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  // handle response error
  res.on("error", err => {
    console.error(err);
  });

  service.listenerHandler(req, res);
});

module.exports = server;
