const Trip = require('../models/trip')
const Hashids = require('hashids')
const hashids = new Hashids()

exports.create = (req,res) => {
  Trip.create({}, (err, trip) => {
    if (err) {
      console.log(err)
    } else {
      let id = hashids.encodeHex(trip.id)
      let query = {
        '_id' : trip.id
      }
      Trip.findOneAndUpdate(query, {'url':id}, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          res.send({'url': id})
        }
      })
    }
  })
}

exports.read = (req,res) => {
  let query = {
    'url' : req.params.id
  }
  Trip.findOne(query).exec((err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    }
    else {
      if (data != null) {
        res.send(data)
      } else {
        res.sendStatus(404)
      }
    }
  })
}

exports.update = (req,res) => {
  let query = {
    'url' : req.params.id
  }
  Trip.findOneAndUpdate(query, {
    dateFrom: req.body.dateFrom,
    dateTo: req.body.dateTo
  }, (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      if (data != null) {
        res.send(data)
      } else {
        res.sendStatus(404)
      }
    }
  })
}
