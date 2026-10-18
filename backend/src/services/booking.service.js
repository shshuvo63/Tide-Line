import { randomUUID } from 'node:crypto';
import { append } from './storage.service.js';
import { getTrip } from './trips.service.js';

export const createBooking = async ({ tripId, name, email, travelers }) => {
  const trip = await getTrip(tripId); // throws 404 for unknown trips
  return append('bookings', {
    id: randomUUID(),
    tripId: trip.id,
    tripName: trip.name,
    name,
    email,
    travelers,
    total: trip.price * travelers,
    status: 'pending',
    createdAt: new Date().toISOString(),
  });
};
