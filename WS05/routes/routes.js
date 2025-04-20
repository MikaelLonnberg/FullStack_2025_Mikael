const express = require('express');
const router = express.Router();
const Item = require('../models/user');

router.get('/getall', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;

