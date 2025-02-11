const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');

const Trip = require('../models/trip'); 

// GET travel page
router.get('/', (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
});

// GET all trips from the database
router.get('/', async (req, res) => {
    try {
        const trips = await Trip.find(); // Fetch all trips from the DB
        res.json(trips);  // Return the trips as JSON
    } catch (err) {
        res.status(500).json({ message: "Error retrieving trips." }); // Handle errors
    }
});

// POST a new trip to the database
router.post('/api/trips', async (req, res) => {
    const { code, title, length, start, resort, perPerson, image, description } = req.body;

    // Create a new trip with the provided data
    const newTrip = new Trip({
        code,
        title,
        length,
        start,
        resort,
        perPerson,
        image,
        description
    });

    try {
        const savedTrip = await newTrip.save();  // Save the new trip to the database
        res.status(201).json(savedTrip);  // Return the saved trip
    } catch (err) {
        res.status(500).json({ message: "Error saving trip." });  // Handle errors
    }
});

module.exports = router;