const url = require("url");
const events = require("events");
let getEmitter = new events.EventEmitter();
let postEmitter = new events.EventEmitter();
let routes = [];

exports.get = (pathname, listener) => {
  routes.push(pathname);
  getEmitter.on(pathname, (req, res) => {
    return listener(req, res);
  });
};

exports.post = (pathname, listener) => {
  routes.push(pathname);
  postEmitter.on(pathname, (req, res) => {
    return listener(req, res);
  });
};

exports.listenerHandler = (req, res) => {
  reqUrl = url.parse(req.url, true);
  let isExist = routes.includes(reqUrl.pathname);
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
