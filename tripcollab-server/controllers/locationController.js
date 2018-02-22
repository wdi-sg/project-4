const Location = require('../models/location')

exports.create = (req, res) => {
  console.log(req)
  Location.create({
    locationID: req.body.id,
    locationName: req.body.name,
    locationAddress: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    // tripID: req.body.tripID
    tripID: "5a8e9ee965e46ee76b9a493f"
  }, (err, location) => {
    if (err) {
      console.log(err)
    } else {
      Location.find({tripID: "5a8e9ee965e46ee76b9a493f"}).exec((err, location) => {
        if (err) {
          console.log(err)
        } else {
          res.send(location)
        }
      })
    }
  });
};

exports.getAllForTrip = (req, res) => {
  // base on the trip id, populate all the location under it
  // Location.find({}).exec((err, location) => {
    Location.find({tripID: "5a8e9ee965e46ee76b9a493f"}, (err, location) => {
    if (err) {
      console.log(err)
    } else {
      res.send(location)
    }
  })
}

exports.delete = (req, res) => {
  console.log(req.params.id)
  Location.remove({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err)
    } else {
      Location.find({tripID: "5a8e9ee965e46ee76b9a493f"}).exec((err, location) => {
        if (err) {
          console.log(err)
        } else {
          res.send(location)
        }
      })
    }
  })
}
