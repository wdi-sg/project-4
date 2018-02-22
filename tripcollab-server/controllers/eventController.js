const Event = require('../models/event')

exports.create = (req, res) => {
  console.log(req);
  Event.create({
    // eventID: req.body.eventID,
    time: req.body.time,
    date: req.body.date,
    description: req.body.description,
    // tripID: req.body.tripID,
    tripID: req.body.tripID,
    locationName: req.body.locationName,
    locationAddress: req.body.locationAddress,
    time: req.body.time
  }, (err, event) => {
    if (err) {
      console.log(err);
    } else {
      res.send(event);
    }
  });
};

exports.view = (req, res) => {
  // Event.find({}).populate('locationID').exec((err, event) => {
  Event.find({tripID: req.params.id}, (err, event) => {
    if (err) {
      console.log(err);
    } else {
      if (event != null) {
        res.send(event);
      } else {
        res.send({})
      }
    }
  });
}

exports.update = (req, res) => {
  console.log(req);
  Event.findByIdAndUpdate(req.body.id,
    {$set: { description: req.body.description, time: req.body.time }},
    (err, event) => {
      if (err) {
        console.log(err)
      } else {
        res.send(event)
      }
    })
}

exports.delete = (req, res) => {
  console.log(req);

  Event.findByIdAndRemove(req.body.id, function(err, data, response) {
    console.log(data)

    if (err) throw err;
    res.status(200).send(response);
  });
};
