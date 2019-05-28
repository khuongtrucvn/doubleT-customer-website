var Product = require('../models/game');
var Category = require('../models/theloai');

exports.index = function(req, res) {  
        Category
		.findAll()
		.then(categories => {
			res.render('trang-chu', { title: 'DoubleT - Trang chủ', categorylink:'/trang-chu', categories })
		});			
};
