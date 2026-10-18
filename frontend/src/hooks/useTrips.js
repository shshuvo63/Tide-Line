import { useEffect, useState } from 'react';
import { getTrips } from '../api/client.js';

export function useTrips(filters) {
  const [state, setState] = useState({ trips: [], loading: true, error: '' });
  const key = JSON.stringify(filters);

  useEffect(() => {
    const controller = new AbortController();
    setState((s) => ({ ...s, loading: true, error: '' }));
    getTrips(filters, controller.signal)
      .then((trips) => setState({ trips, loading: false, error: '' }))
      .catch((err) => {
        if (err.name !== 'AbortError')
          setState({ trips: [], loading: false, error: 'Could not load trips. Is the API running?' });
      });
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return state;
}
