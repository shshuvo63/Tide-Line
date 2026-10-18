import { useState } from 'react';
import { subscribeNewsletter } from '../api/client.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | failed
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await subscribeNewsletter(email);
      setStatus('done');
    } catch (err) {
      setError(err.details?.email || 'Could not subscribe. Try again.');
      setStatus('failed');
    }
  };

  return (
    <section id="newsletter" className="flush-top">
      <div className="wrap">
        <div className="newsletter">
          <div>
            <span className="newsletter-kicker"><span aria-hidden="true">✦</span> A little inspiration, delivered</span>
            <h2>Trip ideas, once a month</h2>
            <p>New itineraries and early access to offers. No spam, unsubscribe any time.</p>
          </div>
          {status === 'done' ? (
            <p className="subscribed" role="status">You are subscribed. Thank you!</p>
          ) : (
            <form onSubmit={submit} noValidate>
              <label htmlFor="n-email" className="sr">Email address</label>
              <div className="newsletter-input-wrap">
                <span aria-hidden="true">@</span>
                <input id="n-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
                <span aria-hidden="true">↗</span>
              </button>
              {error && <small className="err-on-dark" role="alert">{error}</small>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
