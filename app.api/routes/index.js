const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');



// Define API routes
router.get('/trips', tripsController.tripsList);
router.get('/trips/:code', tripsController.tripsFindByCode);
router.post('/trips', tripsController.tripsAddTrip);

module.exports = router;