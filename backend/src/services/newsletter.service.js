import { randomUUID } from 'node:crypto';
import { read, append } from './storage.service.js';

export const subscribe = async ({ email }) => {
  const existing = (await read('subscribers')).find((s) => s.email === email);
  if (existing) return { alreadySubscribed: true };
  await append('subscribers', { id: randomUUID(), email, createdAt: new Date().toISOString() });
  return { alreadySubscribed: false };
};
