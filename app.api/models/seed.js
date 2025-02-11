// Bring in the DB connection and the Trip schema
const mongoose = require('../db');  
const Trip = require('../models/travlr');    

// Read seed data from JSON file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const mongoURI = "mongodb://127.0.0.1/travlr";  // MongoDB URI

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Mongoose connected to ${mongoURI}`);

// Delete any existing records, then insert new seed data
const seedDB = async () => {
    try {
        console.log('Seeding database...');
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log('Seeding complete.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close(() => {
            console.log('Mongoose disconnected');
            process.exit(0); 
        });
    }
  };

// Run the seed function
seedDB();
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

