import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dataDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data');
const file = (name) => path.join(dataDir, `${name}.json`);

// Tiny JSON-file store. Swap this module for a real database (PostgreSQL, MongoDB) later;
// services only depend on read() and append().
export const read = async (name) => {
  try {
    return JSON.parse(await readFile(file(name), 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
};

let queue = Promise.resolve(); // serialises writes so concurrent requests don't clobber the file

export const append = (name, record) => {
  const task = queue.then(async () => {
    const rows = await read(name);
    rows.push(record);
    await writeFile(file(name), JSON.stringify(rows, null, 2));
    return record;
  });
  queue = task.catch(() => {});
  return task;
};
