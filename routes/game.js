var express = require('express');
var router = express.Router();

var game_controller = require('../controllers/gameController');

router.get('/list', game_controller.game_list);

router.get('/:id', game_controller.game_detail);

module.exports = router;
