import { useState } from 'react';
import { createBooking } from '../api/client.js';

export default function BookingModal({ trip, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', travelers: 2 });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done | failed
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrors({});
    try {
      await createBooking({ ...form, travelers: Number(form.travelers), tripId: trip.id });
      setStatus('done');
    } catch (err) {
      setErrors(err.details || {});
      setStatus('failed');
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={`Book ${trip.name}`} onClick={(e) => e.stopPropagation()}>
        {status === 'done' ? (
          <>
            <h3>Request sent</h3>
            <p>Thanks {form.name}. We will email {form.email} within one business day with your {trip.name} itinerary.</p>
            <button className="btn" onClick={onClose}>Close</button>
          </>
        ) : (
          <form onSubmit={submit}>
            <h3>Book {trip.name}</h3>
            <div>
              <label htmlFor="b-name">Full name</label>
              <input id="b-name" value={form.name} onChange={set('name')} />
              {errors.name && <small className="err">{errors.name}</small>}
            </div>
            <div>
              <label htmlFor="b-email">Email</label>
              <input id="b-email" type="email" value={form.email} onChange={set('email')} />
              {errors.email && <small className="err">{errors.email}</small>}
            </div>
            <div>
              <label htmlFor="b-trav">Travelers</label>
              <input id="b-trav" type="number" min="1" max="12" value={form.travelers} onChange={set('travelers')} />
              {errors.travelers && <small className="err">{errors.travelers}</small>}
            </div>
            <p>Estimated total: <b>${(trip.price * (Number(form.travelers) || 1)).toLocaleString()}</b></p>
            {status === 'failed' && !Object.keys(errors).length && (
              <div className="msg" role="alert">Could not send your request. Try again.</div>
            )}
            <div className="actions">
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send request'}
              </button>
              <button type="button" className="btn alt" onClick={onClose}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
