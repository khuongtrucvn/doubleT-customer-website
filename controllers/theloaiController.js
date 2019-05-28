var Category = require('../models/theloai');

exports.theloai_list = function(req, res) {
    Category
		.findAll()
		.then(categories => {
			res.render('trang-chu', { title: 'DoubleT - Trang chủ', categorylink:'/trang-chu', categories })
		});		
};	

exports.theloai_listgame = function(req, res) {
	console.log('FindOne the loai')
    Category.findOne({
		where:{
			id: req.params.id
		}
	})
	.then(categories => {
		if(categories){
			res.json(categories);
		}
		else{
			res.send('Không tìm thấy thể loại này');
		}
	})
	.catch(err => {
		res.send('error: ' + err);
	})
};
