const express = require('express')
const app = express()
const router = express.Router()

app.use(express.static(__dirname + '/'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(1234)