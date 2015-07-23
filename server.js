var http = require('http');

http.createServer(function db(req, res) {
res.writeHead(200, {'Content-Type': 'html' });
res.end('<br><br><br><br><br><br><b>Hello World,<b>\n');
}).listen(3001, "127.0.0.1");
console.log('Brogramming in this place with node.js');
