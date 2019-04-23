var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT | Trang chủ' });
});

router.get('/tai-khoan.hbs', function(req, res, next) {
  res.render('tai-khoan', { title: 'DoubleT | Tài khoản' });
});

module.exports = router;
