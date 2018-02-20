const Location = require('../models/location')

exports.create = (req, res) => {
  console.log(req)
  Location.create({
    locationID: req.body.id,
    locationName: req.body.name,
    locationAddress: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, (err, location) => {
    if (err) {
      console.log(err)
    } else {
      res.sendStatus(location)
    }
  });
};

exports.getAllForTrip = (req, res) => {
  Location.find({}).exec((err, location) => {
    if (err) {
      console.log(err)
    } else {
      res.send(location)
    }
  })
}

exports.delete = (req, res) => {
  let id = req.body.id // dummy
  Location.remove({ locationID: id }, (err) => {
    if (err) {
      console.log(err)
    } else {
      res.sendStatus(200)
    }
  })
}
