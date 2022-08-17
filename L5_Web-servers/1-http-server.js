const http = require('http');
const PORT = 4000;

const server = http.createServer();

server.on('request', (req, res) => {

  if(req.method === 'GET' && req.url === '/'){
    res.write('Hello July 11 Cohort!')
    res.end()
  }

  if(req.method === 'GET' && req.url === '/about'){
    res.write('You are in the ABOUT PAGE')
    res.end()
  }

  if(req.method === 'POST' && req.url === '/about'){
    res.write('You are in the POST ABOUT PAGE')
    res.end()
  }


})

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});