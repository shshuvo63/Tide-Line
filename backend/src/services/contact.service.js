import { randomUUID } from 'node:crypto';
import { append } from './storage.service.js';

export const saveMessage = (data) =>
  append('messages', { id: randomUUID(), ...data, createdAt: new Date().toISOString() });
