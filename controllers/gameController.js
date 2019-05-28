var Product = require('../models/game');
var Category = require('../models/theloai');

var categories;
Category.findAll().then(category => {categories = category});	

exports.game_list = function(req, res) {	
    Product
	.findAll()
	.then(products => {
			res.render('./san-pham/game_list', { title: 'DoubleT - Danh sách game', categorylink:'/game/list', products, categories});
	})
	.catch(err => {
		res.send('error: ' + err);
	})
};

exports.game_detail = function(req, res) {
    Product.findOne({
		where:{
			pid: req.params.id
		}
	})
	.then(products => {
		if(products){
			res.render('./san-pham/game_detail', { title: 'DoubleT - Game', categorylink:'/game/detail', products, categories});
		}
		else{
			res.send('Không tìm thấy game này');
		}
	})
	.catch(err => {
		res.send('error: ' + err);
	})
};
