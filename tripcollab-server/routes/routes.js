const express = require('express');
const router = express.Router();

const tripController = require('../controllers/tripController')
const eventController = require('../controllers/eventController')
const locationController = require('../controllers/locationController')
const homeController = require('../controllers/homeController')

//==================== Trip Control ====================
router.post('/trip/new', tripController.create) // create
router.get('/trip/read/:id', tripController.read) // read
router.put('/trip/updateFrom/:id', tripController.updateFrom) // update
router.put('/trip/updateTo/:id', tripController.updateTo) // update
// router.post('/trip/delete', tripController.delete)

//==================== Location Control ====================
router.post('/location/new', locationController.create) // create
router.get('/location/getAllForTrip/:id', locationController.getAllForTrip) // read
router.delete('/location/delete/:id', locationController.delete)

//==================== Event Control ====================
router.post('/event/new', eventController.create) // create
router.get('/event/view/:id', eventController.view) // read
router.put('/event/update/:id', eventController.update) // update
router.delete('/event/delete/:id', eventController.delete) // delete

//==================== Google Maps API Key to React ====================
router.get('/api/googlemapskey', homeController.googleMapsApiKey)

//==================== 404 ====================
router.get('*', homeController.fourZeroFour)

module.exports = router
