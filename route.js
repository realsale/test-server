const url = require("url");
const events = require("events");
let getEmitter = new events.EventEmitter();
let postEmitter = new events.EventEmitter();
let routes = {
  gets: [],
  posts: []
};

exports.get = (pathname, listener) => {
  routes.gets.push(pathname);
  getEmitter.on(pathname, (req, res) => {
    return listener(req, res);
  });
};

exports.post = (pathname, listener) => {
  routes.posts.push(pathname);
  postEmitter.on(pathname, (req, res) => {
    return listener(req, res);
  });
};

exports.listenerHandler = (req, res) => {
  reqUrl = url.parse(req.url, true);
  method = req.method.toLowerCase().concat("s");
  let isExist = routes[method].includes(reqUrl.pathname);

  if (isExist) {
    if (req.method === "GET") {
      getEmitter.emit(reqUrl.pathname, req, res);
    } else if (req.method === "POST") {
      postEmitter.emit(reqUrl.pathname, req, res);
    }
  } else {
    getEmitter.emit("*", req, res);
  }
};
