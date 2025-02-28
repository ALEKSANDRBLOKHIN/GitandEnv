const express = require('express');
const Item = require('../models/Item');
const router = express.Router();


router.post('/', async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
});


router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});


router.put('/:id', async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
});


router.delete('/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
});

module.exports = router;
