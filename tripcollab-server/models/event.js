const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema ({
  eventID : {
    type : String
  },
  date : {
    type : Date
  },
  description : {
    type : String
  },
  tripID : {
    type : Schema.Types.ObjectId,
    ref : 'Trip'
  },
  locationID : {
    type : Schema.Types.ObjectId,
    ref : 'Location'
  }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event
