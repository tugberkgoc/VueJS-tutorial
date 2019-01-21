 const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page!!!</title></head>');
    res.write('<body>' +
        '<form action="/message" method="POST">' +
        '<input type="text" name="message">' +
        '<button type="submit">Send .' +
        '</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      //console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });  // must be async
    });
  }
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Page!!!</title></head>');
  res.write('<body><h1>Hello from my nodeJs server.</h1></body>');
  res.write('</html>');
  res.end();
}

// module.exports = {
//   handler: requestHandler,
//   someText: 'Hello from route class'
// };

exports.handler = requestHandler;
exports.someText = 'Hello from route class';