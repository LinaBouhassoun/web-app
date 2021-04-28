var express = require('express')
var cors = require('cors')
var app = express()
const port = 8000

app.get('/', cors(), function (req, res) {
  res.json({msg: 'Hi from Poitiers ! This is CORS-enabled for a Single Route added'})
})
app.get('/auth', cors(), function (req, res) {
  console.log(req)
  res.json({msg: 'Hi from Poitiers ! This is CORS-enabled for a Single Route added'})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  


