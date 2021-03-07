const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const api = require('./routes/api.js')

express()
  .use(express.json())
  .use(express.static(path.join(__dirname, '../build')))
  .get('/api', api.apiController)
  .get('*', (req, res) => res.sendFile('./index.html', { root: path.join(__dirname, '../build') }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
