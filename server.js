const server = require("./realsale");
const route = require("./route");
let users = require("./testdb.json");

route.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end("Hello jerry...");
});

route.get("/users", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(users));
});

route.post("/sample", (req, res) => {
  let body = [];

  req.on("data", function(chunk) {
    body.push(chunk);
  });

  req.on("end", function() {
    body = JSON.parse(Buffer.concat(body).toString());

    var response = {
      email: "Post request email is  " + body.email,
      password: "Post request password is  " + body.password
    };

    res.writeHead(200, "Content-Type", "application/json");
    res.end(JSON.stringify(response));
  });
});

route.get("*", (req, res) => {
  res.writeHead(400, { "Content-Type": "text/html" });
  res.end("404 Walang Yelo.");
});

server.listen(process.env.PORT || 4000, () => {
  console.log("server is up and running");
});
