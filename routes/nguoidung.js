var express = require('express');
var router = express.Router();

var nguoidung_controller = require('../controllers/nguoidungController');

router.get('/nguoi-dung', nguoidung_controller.nguoidung_detail);

module.exports = router;
