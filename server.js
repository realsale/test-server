const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World.");
  res.end();
});

server.listen(4001, () => {
  console.log("server listening on port 4001");
});
