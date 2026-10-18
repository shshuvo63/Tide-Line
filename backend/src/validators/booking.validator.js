const EMAIL = /^\S+@\S+\.\S+$/;

export const validateBooking = (body) => {
  const errors = {};
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const tripId = Number(body.tripId);
  const travelers = Number(body.travelers);

  if (name.length < 2) errors.name = 'Enter your full name.';
  if (!EMAIL.test(email)) errors.email = 'Enter a valid email address.';
  if (!Number.isInteger(tripId)) errors.tripId = 'Choose a trip.';
  if (!Number.isInteger(travelers) || travelers < 1 || travelers > 12)
    errors.travelers = 'Travelers must be between 1 and 12.';

  return { errors, value: { name, email, tripId, travelers } };
};
