const tree = require('../controllers/tree.controller.js');
const express = require("express");
const router = express.Router();

router.post('/insert', tree.insert);
router.get('/search/:data', tree.find);

module.exports = router;