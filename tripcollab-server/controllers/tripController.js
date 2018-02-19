const Trip = require('../models/trip')
const Hashids = require('hashids')
const hashids = new Hashids()


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
