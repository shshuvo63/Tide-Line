import { useState } from 'react';
import { sendContact } from '../api/client.js';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrors({});
    try {
      await sendContact(form);
      setStatus('done');
    } catch (err) {
      setErrors(err.details || {});
      setStatus('failed');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-layout">
          <div className="contact-intro">
            <span className="contact-eyebrow"><span aria-hidden="true">✳</span> Your next journey starts here</span>
            <h2>Tell us where you want to go</h2>
            <p>Share a rough plan, a faraway dream, or just the kind of trip you love. A planner will get back to you within one business day.</p>
            <div className="contact-promise">
              <span className="contact-promise-icon" aria-hidden="true">✦</span>
              <span><strong>Made for you, not a template.</strong><small>Real trip ideas from people who know the way.</small></span>
            </div>
          </div>

          <div className="contact-panel">
            {status === 'done' ? (
              <div className="contact-success" role="status">
                <span className="contact-success-icon" aria-hidden="true">✓</span>
                <h3>We’ve got your note.</h3>
                <p>Message sent. We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="stack contact-form">
                <div className="contact-fields">
                  <div className="contact-field">
                    <label htmlFor="c-name">Your name</label>
                    <input id="c-name" autoComplete="name" placeholder="e.g. Alex Morgan" value={form.name} onChange={set('name')} />
                    {errors.name && <small className="err">{errors.name}</small>}
                  </div>
                  <div className="contact-field">
                    <label htmlFor="c-email">Email address</label>
                    <input id="c-email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
                    {errors.email && <small className="err">{errors.email}</small>}
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="c-msg">What are you dreaming of?</label>
                  <textarea id="c-msg" rows="4" placeholder="A beach escape, a mountain adventure, a little bit of both…" value={form.message} onChange={set('message')} />
                  {errors.message && <small className="err">{errors.message}</small>}
                </div>
                <div className="contact-submit-row">
                  <button className="btn contact-submit" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send your trip idea'}
                    <span aria-hidden="true">↗</span>
                  </button>
                  <small>We’ll only use your details to get back to you.</small>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
