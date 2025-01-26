var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');

//GET travel page. 
router.get('/', controller.travel);

// GET edit page for a specific trip
//router.get('/edit/:id', controller.editTrip);

// Remove the POST update route for now
//router.post('/update/:id', controller.updateTrip);

module.exports = router;