import { subscribe } from '../services/newsletter.service.js';

export const create = async (req, res, next) => {
  try {
    res.status(201).json({ data: await subscribe(req.valid) });
  } catch (e) { next(e); }
};
