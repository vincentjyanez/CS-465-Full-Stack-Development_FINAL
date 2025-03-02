const Trip = require('../models/trip'); 

// GET travel view with dynamic data from MongoDB
const travel = async (req, res) => {
    try {
        const trips = await Trip.find(); // Fetch all trips
        res.render('travel', { title: 'Travlr Getaways', trips });
    } catch (err) {
        console.error("Error retrieving trips:", err);
        res.status(500).render('travel', { title: 'Travlr Getaways', trips: [], message: 'Error retrieving trips.' });
    }
};

// API route to get trips in JSON format
const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find(); // Fetch all trips from MongoDB
        res.json(trips); // Return trips in JSON format
    } catch (err) {
        console.error("Error retrieving trips:", err);
        res.status(500).json({ message: 'Error retrieving trips.' });
    }
};

module.exports = { 
    travel,
    getTrips
};
