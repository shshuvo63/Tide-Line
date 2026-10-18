import { useEffect, useState } from 'react';

const KEY = 'tideline:saved';

export function useSavedTrips() {
  const [saved, setSaved] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch { /* storage unavailable */ }
  }, [saved]);

  const toggle = (id) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return { saved, toggle };
}
