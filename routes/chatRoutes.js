const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/messages', async (req, res) => {
    const messages = await chatController.getMessages();
    res.json(messages);
});

module.exports = router;
