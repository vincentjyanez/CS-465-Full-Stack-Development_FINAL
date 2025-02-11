const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Import the correct model
const model = mongoose.model('trips');


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


// GET /trips/:tripCode - find trip by code
const tripsFindByCode = async (req, res) => {
    const q = await model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        const trip = await Trip.findOne({ code: req.params.tripCode }); // Use findOne for a single record
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
