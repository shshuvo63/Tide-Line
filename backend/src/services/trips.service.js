import { read } from './storage.service.js';
import { HttpError } from '../utils/HttpError.js';

export const listTrips = async ({ region, q, maxPrice, minDays, maxDays } = {}) => {
  const trips = await read('trips');
  const term = q?.trim().toLowerCase();
  return trips.filter(
    (t) =>
      (!region || region === 'All' || t.region === region) &&
      (!term || `${t.name} ${t.place}`.toLowerCase().includes(term)) &&
      (!maxPrice || t.price <= Number(maxPrice)) &&
      (!minDays || t.days >= Number(minDays)) &&
      (!maxDays || t.days <= Number(maxDays))
  );
};

export const getTrip = async (id) => {
  const trip = (await read('trips')).find((t) => t.id === Number(id));
  if (!trip) throw new HttpError(404, 'Trip not found.');
  return trip;
};
