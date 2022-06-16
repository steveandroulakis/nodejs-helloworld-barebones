const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Steve!!!!!!')
})

module.exports = app