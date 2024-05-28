const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/') {
res.end('Welcome to my homePage');
} else if (req.url === '/about') {
res.end('Welcome to my aboutPage');
} else {
res.end(`
<h1> Ooops ! </h1>
<p>Page not found </p>
<a href='/'> Home </a>

`);
}
});

server.listen(5000);