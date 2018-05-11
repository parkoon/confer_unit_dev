const express = require('express');
const router = express.Router();

// controllers
const sharing_controller = require('../controllers/sharingController')

router.get('/whiteboard', sharing_controller.whiteboard);

module.exports = router;