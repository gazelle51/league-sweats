const httpContext = require('express-http-context');
const winston = require('winston');

// Formatting of console logs
const consoleFormat = winston.format.printf(({ level, message, timestamp }) => {
  // Colour of log
  const logLevel = winston.format.colorize().colorize(level, `${level.toUpperCase()}`);

  return `${timestamp} [${logLevel}] ${message}`;
});

// Formatting of JSON logs
const jsonFormat = winston.format.printf(({ level, message, timestamp }) => {
  // Trace ID
  const traceID = httpContext.get('traceID');

  // Formatting of JSON
  return JSON.stringify({
    traceID,
    timestamp, // Math.round(new Date(timestamp).getTime() / 1000),
    level,
    message,
  });
});

// Logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(winston.format.timestamp(), consoleFormat),
    }),
  ],
});

module.exports = logger;
