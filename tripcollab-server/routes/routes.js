const express = require('express');
const router = express.Router();

const tripController = require('../controllers/tripController')
const eventController = require('../controllers/eventController')
const locationController = require('../controllers/locationController')
const homeController = require('../controllers/homeController')

//==================== index ====================
router.get('/', homeController.index)
// router.get('*', homeController.fourZeroFour)


//==================== Trip Control ====================
router.post('/trip/new', tripController.create) // create
// router.get('/trip/main', tripController.main) // read
// router.post('/trip/update', tripController.update) // update
// router.post('/trip/delete', tripController.delete)

//==================== Location Control ====================
router.post('/location/new', locationController.create) // create
router.get('/location/getAllForTrip', locationController.getAllForTrip) // read
router.delete('/location/delete', locationController.delete)

//==================== Event Control ====================
router.post('/event/new', eventController.create) // create
router.get('/event/view', eventController.view) // read
router.put('/event/update/:id', eventController.update) // update
router.delete('/event/delete/:id', eventController.delete) // delete

//==================== 404 ====================
// router.get('*', authController.fourZeroFour)



module.exports = router;
