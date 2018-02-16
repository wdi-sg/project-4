const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.post('/location/new', locationController.create);
router.get('/location/getAllForTrip', locationController.getAllForTrip);

module.exports = router;
