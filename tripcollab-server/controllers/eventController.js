const Event = require('../models/event')

exports.create = (req, res) => {
  console.log(req);
  Event.create({
    eventID: req.body.eventID,
    date: req.body.date,
    description: req.body.description,
    tripID: req.body.tripID,
    locationID: req.body.location_id
  }, (err, event) => {
    if (err) {
      console.log(err);
    } else {
      res.send(event);
    }
  });
};

exports.view = (req, res) => {
  Event.find({}).populate('locationID').exec((err, event) => {
    if (err) {
      console.log(err);
    } else {
      res.send(event);
    }
  });
}

exports.update = (req, res) => {
  console.log(req);
  Event.findByIdAndUpdate(req.body.id,
    {$set: { description: req.body.description }},
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
