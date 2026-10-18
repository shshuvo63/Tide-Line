import { saveMessage } from '../services/contact.service.js';

export const create = async (req, res, next) => {
  try {
    await saveMessage(req.valid);
    res.status(201).json({ data: { received: true } });
  } catch (e) { next(e); }
};
