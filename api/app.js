const cookieParser = require('cookie-parser');
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const expressWinston = require('express-winston');
const httpContext = require('express-http-context');
const logger = require('./config/logger');

const { requestReceived } = require('./middlewares/requestReceived');

const indexRouter = require('./routes/index');
const v1Router = require('./routes/v1/index');

const app = express();

app.use(cors());

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
app.use('/api/v1', v1Router);

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
  const statusCode = err.status || 500;
  res.status(statusCode).json({ status: statusCode, data: null, message: err.message });
});

module.exports = app;
