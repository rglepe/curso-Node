const express = require('express')
const app = express();
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const studentsRoutes = require('./routes/personRoutes')


//app.use(auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', studentsRoutes)

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(3000, function () {
    console.log('Example app listening on port 3000! Go to https://localhost:3000/')
  })
  