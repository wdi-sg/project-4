const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const dbConfig = require('./config/dbConfig')
const routes = require('./routes/routes')

const port = 3001
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.urlLive, {
  // options empty on purpose
}).then(() => {
  console.log("----Mongoose ok----")
}, (err) => {
  console.log(err)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/', routes)

app.listen(port, () => {
  console.log(`----Express Server Started----`)
})
