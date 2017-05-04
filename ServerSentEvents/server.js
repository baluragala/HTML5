var SSE = require('sse')
  , http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/event-stream', 'Access-Control-Allow-Origin': '*'});
  res.end('okay');
});

server.listen(3000, 'local', function () {
  var sse = new SSE(server);
  sse.on('connection', function (client) {
    console.log(client);
    //client.res.writeHead(200, {'Content-Type': 'text/event-stream','Access-Control-Allow-Origin':'*'});
    client.send('hi there!')
  });
});
