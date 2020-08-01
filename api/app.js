const createError = require('http-errors');
const express = require('express');
const expressWinston = require('express-winston');
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

// Received request
app.use(httpContext.middleware);
app.use(requestReceived);

// Logger for finished requests
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    msg: '{{req.method}} {{req.url}} {{res.statusCode}} - {{res.responseTime}}ms',
  })
);

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
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
