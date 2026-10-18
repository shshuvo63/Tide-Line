import { HttpError } from '../utils/HttpError.js';

export const notFound = (req, _res, next) =>
  next(new HttpError(404, `Route not found: ${req.method} ${req.originalUrl}`));

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  if (status >= 500) console.error(err);
  res.status(status).json({
    error: status >= 500 ? 'Something went wrong on our side.' : err.message,
    ...(err.details && { details: err.details }),
  });
};
