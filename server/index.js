const express = require('express')
const cors = require('cors')

const messages = require('./messages.json')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: "I'm alive" })
})

app.get('/table', (req, res) => {
  res.json(messages)
})

app.listen(3001, function() {
  console.log('CORS-enabled web server listening on port 3001')
})
