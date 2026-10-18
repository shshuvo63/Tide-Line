import * as trips from '../services/trips.service.js';

export const list = async (req, res, next) => {
  try {
    res.json({ data: await trips.listTrips(req.query) });
  } catch (e) { next(e); }
};

export const get = async (req, res, next) => {
  try {
    res.json({ data: await trips.getTrip(req.params.id) });
  } catch (e) { next(e); }
};
