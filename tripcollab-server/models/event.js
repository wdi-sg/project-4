const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema ({
  eventID : {
    type : String
  },
  date : {
    type : Number
<<<<<<< HEAD
  },
  time : {
    type : String
=======
>>>>>>> a8c1715458227a7c16c1dfd52ae359382524984c
  },
  description : {
    type : String
  },
  tripID : {
    type : Schema.Types.ObjectId,
    ref : 'trip'
  },
  locationID : {
    type : Schema.Types.ObjectId,
    ref : 'location'
  }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event
