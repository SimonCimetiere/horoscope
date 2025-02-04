var express = require('express');
var router = express.Router();
var horoscope = require('horoscope');

var getSign = (day, month) => {
  return horoscope.getSign({month: Number.parseInt(month), day: Number.parseInt(day)})
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var sign = getSign(req.query.day,req.query.month)
  res.render('index', { sign: sign });
});

module.exports = router;
