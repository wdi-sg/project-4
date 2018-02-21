require('dotenv').config({path: '../secrets.env'}) // For env file
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const dbConfig = require('./config/dbConfig')
const routes = require('./routes/routes')

const port = process.env.PORT || 3001
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

// Serve static files for production
app.use(express.static(path.resolve(__dirname, '../tripcollab-client/build')))
// const staticFiles = express.static(path.join(__dirname, '../tripcollab-client/build'))

// allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/', routes)

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../tripcollab-client/build', 'index.html'))
})

app.listen(port, () => {
  console.log('----Express Server Started on Port ' + port + '----')
})
