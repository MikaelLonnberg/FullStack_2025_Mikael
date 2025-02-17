const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.url === "/") {
    res.write("<h1>Hello World!</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>About Us</h1>");
    } else if (req.url === "/contact") {
        res.write("<h1>Contact Us</h1>");
    } else {
        res.write("<strong>Hakemaasi sivua ei löytynyt!</strong>");
    }
  res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`); 
});
