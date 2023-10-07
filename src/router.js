const express = require('express');
const router = express.Router();
const controller = require('./controller/MessageController');


router.get('/all', controller.getAll);
router.post('/send', controller.sendMessage);





module.exports = router;