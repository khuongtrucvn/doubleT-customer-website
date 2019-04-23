var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT | Trang chủ' });
});

router.get('/dang-nhap-dang-ki.hbs', function(req, res, next) {
  res.render('dang-nhap-dang-ki', { title: 'DoubleT | Đăng nhập - Đăng kí' });
});

router.get('/tai-khoan.hbs', function(req, res, next) {
  res.render('tai-khoan', { title: 'DoubleT | Tài khoản' });
});

module.exports = router;
