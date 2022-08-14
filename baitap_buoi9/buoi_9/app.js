var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connetDatabase = require('./config/db')
connetDatabase()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
var productsRouter = require('./routes/productRouter')
var reviewRouter = require('./routes/reviewRouter')
var orderRouter = require ('./routes/orderRouter')

const { errHandle } = require('./middleware/errMiddleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products',productsRouter)
app.use('/api/review',reviewRouter)
app.use("/api/order",orderRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(errHandle)
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
