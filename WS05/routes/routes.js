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

router.get('/get/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

router.post('/add',  async (req, res) => {
    const {name, email, age} = req.body;
    const item = new Item({ name, email, age });    
    try {
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

router.put('/update/:id', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, { name, email, age }, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}) 

module.exports = router;

