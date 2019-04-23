var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT | Trang chủ' });
});

router.get('/dang-nhap-dang-ki.hbs', function(req, res, next) {
  res.render('dang-nhap-dang-ki', { title: 'DoubleT | Đăng nhập - Đăng kí' });
});

router.get('/quen-mat-khau.hbs', function(req, res, next) {
  res.render('quen-mat-khau', { title: 'DoubleT | Quên mật khẩu' });
});

router.get('/tai-khoan.hbs', function(req, res, next) {
  res.render('tai-khoan', { title: 'DoubleT | Tài khoản' });
});

router.get('/gio-hang.hbs', function(req, res, next) {
  res.render('gio-hang', { title: 'DoubleT | Giỏ hàng' });
});

module.exports = router;
