var express = require('express')
var cors = require('cors')
var app = express()
const port = 8000

app.get('/', cors(), function (req, res) {
  res.json({msg: 'Hi from Poitier ! This is CORS-enabled for a Single Route'})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  


