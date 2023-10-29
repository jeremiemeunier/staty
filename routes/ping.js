const express = require('express');
const router = express.Router();
const Ping = require('../models/Ping');
const staty = require('../middlewares/staty');

const { logger } = require('../functions/logger');

router.post('/ping', staty, async (req, res) => {
    const { name, state } = req.body;

    try {
        const newPing = new Ping({
            api_name: name,
            state: state
        });
        await newPing.save();

        res.status(201).json({ message: 'New ping registred' });
    }
    catch(error) { logger(`🔴 | Route error : ${error}`); }
});

module.exports = router;