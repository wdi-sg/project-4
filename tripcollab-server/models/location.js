const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }
});

const Location = mongoose.model('location', locationSchema)
module.exports = Location;
