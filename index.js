const http = require('http');

const server = http.createServer();

server.on('request', function (request, response) {

    response.write('<h1>Product Manaager</h1><br /><br />To create product please enter: teste');
  	response.end();
});

server.listen(3000);