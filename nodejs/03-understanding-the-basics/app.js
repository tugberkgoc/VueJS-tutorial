const http = require('http');
const router = require('./routes')

const server = http.createServer(router.handler
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  // const url = req.url;
  // const method = req.method;
);

console.log(router.someText);

server.listen(3000);