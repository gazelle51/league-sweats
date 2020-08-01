const createError = require('http-errors');
const express = require('express');
const httpContext = require('express-http-context');
const cookieParser = require('cookie-parser');

const { requestReceived } = require('./middlewares/requestReceived');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const logger = require('./config/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Received request
app.use(httpContext.middleware);
app.use(requestReceived);

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  logger.error(err.message);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
