var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  setTimeout(() => {
    res.status(200).json({ status: 200, data: { message: 'respond with a resource!' } });
  }, 1500);
});

module.exports = router;
