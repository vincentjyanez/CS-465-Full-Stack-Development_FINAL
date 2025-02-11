const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');
const ctrlMain = require('../controllers/main');

//GET home page. 
router.get('/', ctrlMain.index) 

// GET travel page 
router.get('/travel', travelController.travel);

// API route to get trips in JSON format
router.get('/api/trips', travelController.getTrips);

module.exports = router;

