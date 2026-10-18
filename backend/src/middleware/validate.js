import { HttpError } from '../utils/HttpError.js';

// Wraps a validator `(body) => ({ errors, value })` and attaches the clean value to req.valid.
export const validate = (validator) => (req, _res, next) => {
  const { errors, value } = validator(req.body ?? {});
  if (Object.keys(errors).length) {
    return next(new HttpError(400, 'Please fix the highlighted fields.', errors));
  }
  req.valid = value;
  next();
};
