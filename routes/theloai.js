var express = require('express');
var router = express.Router();

var theloai_controller = require('../controllers/theloaiController');

router.get('/theloai/:id', theloai_controller.theloai_listgame);

router.get('/theloai', theloai_controller.theloai_list);

module.exports = router;
