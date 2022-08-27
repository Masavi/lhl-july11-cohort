const net = require('net');

const client = net.createConnection({
  host: 'localhost', // 127.0.0.1
  port: 3001
});

setTimeout(() => {
  client.end();
}, 3000)

