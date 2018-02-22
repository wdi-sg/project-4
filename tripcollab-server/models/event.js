const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema ({
  eventID : {
    type : String
  },
  date : {
    type : Number
  },
  time : {
    type : String
  },
  description : {
    type : String
  },
  time : {
    type : String
  },
  locationName : {
    type : String
  },
  locationAddress : {
    type : String
  },
  tripID : {
    type : Schema.Types.ObjectId,
    ref : 'Trip'
  }
})

const Event = mongoose.model('event', eventSchema)
module.exports = Event
