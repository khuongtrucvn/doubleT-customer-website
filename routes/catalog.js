var express = require('express');
var router = express.Router();

var game_controller = require('../controllers/gameController');
var theloai_controller = require('../controllers/theloaiController');
var nguoidung_controller = require('../controllers/nguoidungController');
var donhang_controller = require('../controllers/donhangController');

/// GAME ROUTES ///
router.get('/', game_controller.index);

router.get('/game/:id', game_controller.game_detail);

router.get('/games', game_controller.game_list);

/// CATEGORY ROUTES ///

router.get('/theloai/:id', theloai_controller.theloai_listgame);

router.get('/theloai', theloai_controller.theloai_list);

/// USER ROUTES ///

router.get('/nguoidung', nguoidung_controller.nguoidung_detail);

/// ORDER ROUTES ///

router.get('/donhang', donhang_controller.donhang_list);

router.get('/donhang', donhang_controller.donhang_detail);

module.exports = router;
