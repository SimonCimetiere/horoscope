var express = require('express');
var router = express.Router();
var horoscope = require('horoscope');

var getSign = (day, month) => {
  return horoscope.getSign({month: Number.parseInt(month), day: Number.parseInt(day)})
}

/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    const day = Number.parseInt(req.query.day)
    const month = Number.parseInt(req.query.month)
    var sign = getSign(day, month)
    res.render('index', { sign: sign });
  } catch(e) {
    throw new Error("Not a Number");
  }
});

module.exports = router;
