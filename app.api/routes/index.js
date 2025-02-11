const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Define API routes
router.get('/trips', tripsController.tripsList);

// Get Method routes tripsFindByCode - requires parameter
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

module.exports = router;