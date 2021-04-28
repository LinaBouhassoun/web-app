var express = require('express')
var cors = require('cors')
const bodyParser = require("body-parser");
var app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({msg: 'Hi from Poitiers ! This is CORS-enabled for a Single Route added'})
})
app.post('/auth', function (req, res) {
  console.log(req.body)
  res.json({msg: 'Hi from Poitiers ! This is CORS-enabled for a Single Route addedsaaaaaaaaaaaa'})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  


