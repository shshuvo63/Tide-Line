const EMAIL = /^\S+@\S+\.\S+$/;

export const validateNewsletter = (body) => {
  const errors = {};
  const email = String(body.email ?? '').trim().toLowerCase();
  if (!EMAIL.test(email)) errors.email = 'Enter a valid email address.';
  return { errors, value: { email } };
};
