const httpContext = require('express-http-context');
const uuidv4 = require('uuid').v4;
const logger = require('../config/logger');

/**
 * Create a trace ID for the request.
 * @param req - Express request
 */
function createTraceID(req) {
  logger.debug(`Creating request trace ID`);

  // Create trace ID
  req.traceID = uuidv4();

  // Make trace ID available in httpContext
  httpContext.set('traceID', req.traceID);
}

/**
 * Log when a request has been received.
 * @param req - Express request
 * @param res - Express response
 * @param next - Express next function
 */
function requestReceived(req, res, next) {
  try {
    // Attach trace ID
    createTraceID(req);

    // Log request received
    logger.info(`${req.method} ${req.originalUrl}`);

    // Pass request to routers
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  requestReceived,
};
