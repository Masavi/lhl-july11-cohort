const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

/**
 * This are also middlewares
 */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * My own custom middlewares
 */
// app.use((req, res, next) => {
//   console.log('New request!!', req.method, req.url)
//   next()
// })

app.use((req, res, next) => {
  if (!req.body.first_name) {
    return res.status(400).send('You have to provide first_name :(')
  }

  next()
})

app.get('/about', (req, res) => {
  res.send('You are in the ABOUT PAGE')
})

/**
 * POST REQUESTS are about SENDING DATA (payload-json-object)
 */
app.post('/about', (req, res) => {
  console.log('This is the requests body:', req.body)
  res.send('You are in the ABOUT page, using a POST method')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
