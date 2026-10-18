import { createBooking } from '../services/booking.service.js';

export const create = async (req, res, next) => {
  try {
    res.status(201).json({ data: await createBooking(req.valid) });
  } catch (e) { next(e); }
};
