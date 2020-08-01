var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json({ status: 200, data: { message: 'respond with a resource!' } });
});

module.exports = router;
