let http = require("http");
const { runInNewContext } = require("vm");

let app = http.createServer(function (req, res) {
  res.writeHead(200);
  res.write("this is my server");
  res.end();
});
