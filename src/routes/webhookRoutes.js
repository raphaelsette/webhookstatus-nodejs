const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

// POST em /api/webhook chama o webhookcontroller
router.post('/webhook', webhookController.receiveStatus);

module.exports = router;