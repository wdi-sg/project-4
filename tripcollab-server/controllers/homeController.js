exports.fourZeroFour = (req, res) => {
  // req.flash("404. What you're looking for is not found.")
  res.sendStatus(404)
}

exports.googleMapsApiKey = (req, res) => {
  if (req.headers.host.includes('local')) {
    let key = {
      'key': process.env.GOOGLE_MAPS_API_KEY
    }
    res.send(key)
  }
  else {
    console.log(req.headers.host + ' requested for api key')
    res.sendStatus(404)
  }
}
