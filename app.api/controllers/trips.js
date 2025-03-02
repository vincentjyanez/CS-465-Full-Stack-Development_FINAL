const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Import the correct model

// GET /trips - lists all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find(); // Find all trips
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: "No trips found" });
        }
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}; 

// GET /trips/:code - Find a trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.code });
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// POST /trips - Add a new trip
const tripsAddTrip = async (req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();
        return res.status(201).json(trip);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Export the functions
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip
};
