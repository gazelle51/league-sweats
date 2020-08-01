var express = require('express');
var router = express.Router();

const { Kayn, REGIONS } = require('kayn');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json({ status: 200, data: { message: 'team' } });
});

module.exports = router;
