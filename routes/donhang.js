var express = require('express');
var router = express.Router();

var donhang_controller = require('../controllers/donhangController');

router.get('/donhang', donhang_controller.donhang_list);

router.get('/donhang', donhang_controller.donhang_detail);

module.exports = router;
