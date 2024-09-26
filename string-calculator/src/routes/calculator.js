const express = require('express');
const { add } = require('../utils/add');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const { numbers } = req.body;
        const result = add(numbers);
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
