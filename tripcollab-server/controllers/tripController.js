const Trip = require('../models/trip')
// const Hashids = require('hashids')
// const hashids = new Hashids()

exports.create = (req,res) => {
  Trip.create({
    dateFrom: req.body.dateFrom,
    dateTo: req.body.dateTo
  }, (err, trip) => {
    if (err) {
      console.log(err)
    } else {
      // var id = hashids.encodeHex(trip.id)
      // res.send(id)
      res.send(trip.id)
    }
  })
}

exports.view = (req,res) => {
  Trip.findById(req.params.id).exec((err, trip) => {
    if (err) {
      console.log(err)
    } else {
      console.log(trip);
      res.send(trip)
}
})
}

exports.update = (req,res) => {
  // if (req.body.dateFrom) {
  //   console.log("datefrom")
  //   Trip.findByIdAndUpdate(req.body.id,
  //     {$set: { dateFrom: req.body.dateFrom }},
  //     (err, event) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         res.send(event)
  //       }
  //     })
  // } else {
  //   console.log("dateto");
  //   Trip.findByIdAndUpdate(req.body.id,
  //     {$set: { dateTo: req.body.dateTo }},
  //     (err, event) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         res.send(event)
  //       }
  //     })
  // }
}
