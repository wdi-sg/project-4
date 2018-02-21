const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema ({
  locationID : {
    type : String
  },
  locationName : {
    type : String
  },
  locationAddress : {
    type : String
  },
  latitude : {
    type : Number
  },
  longitude : {
    type : Number
  },
  tripID : {
    type : Schema.Types.ObjectId,
    ref : 'trip'
  }
})

const Location = mongoose.model('Location', locationSchema)
module.exports = Location
