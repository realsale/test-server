const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World.");
  res.end();
});

server.listen(process.env.PORT || 4000, () => {
  console.log("server is up and running");
});
