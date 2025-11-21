var express = require('express');
var router = express.Router();

/* GET splash/home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET crud page */
router.get('/crud', function(req, res, next) {
  res.render('crud');
});

module.exports = router;
