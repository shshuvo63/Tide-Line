const BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(body.error || 'Request failed.');
    err.details = body.details;
    throw err;
  }
  return body.data;
}

export const getTrips = (filters, signal) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([k, v]) => v && v !== 'All' && params.set(k, v));
  return request(`/trips?${params}`, { signal });
};

export const createBooking = (payload) =>
  request('/bookings', { method: 'POST', body: JSON.stringify(payload) });

export const sendContact = (payload) =>
  request('/contact', { method: 'POST', body: JSON.stringify(payload) });

export const subscribeNewsletter = (email) =>
  request('/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
