var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

//GET home page. 
router.get('/', ctrlMain.index) 

router.get('/api/things', (req, res) => {
    const things = [
        { id: 1, name: 'Thing One', isActive: true },
        { id: 2, name: 'Thing Two', isActive: false },
        { id: 3, name: 'Thing Three', isActive: true }
    ];

    const activeThings = things.filter(thing => thing.isActive);
    res.json(activeThings);
});

module.exports = router;

