var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//var nguoidungRouter = require('./routes/nguoidung');
//var catalogRouter = require('./routes/catalog');


//var donhangRouter = require('./routes/donhang');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routing
 */
var indexRouter = require('./routes/index');
var theloaiRouter = require('./routes/theloai');
var gameRouter = require('./routes/game');
 
//app.get('/',(req,res) => res.render('trang-chu'));
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/theloai', theloaiRouter);

//app.use('/nguoi-dung', nguoidungRouter);
//app.use('/catalog', catalogRouter);
//app.use('/donhang', donhangRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
