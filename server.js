const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello real.");
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(process.env.PORT || 4000, () => {
  console.log("server is up and running");
});
