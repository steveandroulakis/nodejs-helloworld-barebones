const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<strong>Steve's</strong> server has started.")
})

module.exports = app