const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema ({
  dateFrom : {
    type : Date
  },
  dateTo : {
    type : Date
  },
  url : {
    type : String
  }
})

const Trip = mongoose.model('trip', tripSchema)
module.exports = Trip
