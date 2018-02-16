const Location = require('../models/location')

exports.create = (req, res) => {
  console.log(req);
  Location.create({
    locationID: req.body.id,
    locationName: req.body.name,
    locationAddress: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, (err, location) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.getAllForTrip = (req, res) => {
  Location.find({}).exec((err, location) => {
    if (err) {
      console.log(err);
    } else {
      res.send(location);
    }
  });
}
