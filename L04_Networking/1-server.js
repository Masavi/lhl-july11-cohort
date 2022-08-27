const net = require('net');
const server = net.createServer();

const PORT = 3001;

server.on('connection', (client) => {
  console.log('Connection established!')
  
  client.on('end', () => {
    console.log('The client just left 😢');
  })

  client.on('error', () => {
    console.log('Error on client side')
  })
})

server.on('error', () => {
  console.log('Error on the server side');
})

/**
 * We have to provide a port number
 * for this process within our computer
 */
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
