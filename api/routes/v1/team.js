var express = require('express');
var router = express.Router();

const { Kayn, REGIONS } = require('kayn');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ message: 'team' });
});

module.exports = router;
