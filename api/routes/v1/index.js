const express = require('express');
const router = express.Router();

const team = require('./team');
const users = require('./users');

router.use('/team', team);
router.use('/users', users);

module.exports = router;
