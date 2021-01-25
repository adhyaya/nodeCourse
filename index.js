const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("request for" + req.url + 'by method' + req.method);

  if (req.method === 'GET') {
    let fileUrl;
    if (req.url === '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    let filePath = path.resolve('./public' + fileUrl);
    const fileExt = path.extname(filePath);
    console.log(fileExt)
    if (fileExt == '.html') {
      if (fileExt == '.html') {
        fs.exists(filePath, (exists) => {

          if (!exists) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/Html');
            res.end('<html><body><h1>Notfound</h1></body></html>');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/Html');
          fs.createReadStream(filePath).pipe(res);
        })
      }
      else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/Html');
        res.end('<html><body><h1>Notfound and Not a html page</h1></body></html>');
        return;
      }
    }
    else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/Html');
      res.end('<html><body><h1>Notfound and Not a html page</h1></body></html>');
      return;
    }
  }

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}://${port}`)
})