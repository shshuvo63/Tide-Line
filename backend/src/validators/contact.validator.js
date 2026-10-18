const EMAIL = /^\S+@\S+\.\S+$/;

export const validateContact = (body) => {
  const errors = {};
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const message = String(body.message ?? '').trim();

  if (name.length < 2) errors.name = 'Enter your name.';
  if (!EMAIL.test(email)) errors.email = 'Enter a valid email address.';
  if (message.length < 10) errors.message = 'Tell us a little more (10+ characters).';

  return { errors, value: { name, email, message } };
};
