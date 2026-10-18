import { useState } from 'react';

// duration option -> [minDays, maxDays] sent to the API
const DURATIONS = { '1-3': [1, 3], '4-7': [4, 7], '8-14': [8, 14], '15+': [15, ''] };

export default function SearchSection({ onSearch }) {
  const [q, setQ] = useState({ q: '', maxPrice: '', duration: '' });
  const set = (key) => (e) => setQ({ ...q, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const [minDays, maxDays] = DURATIONS[q.duration] || ['', ''];
    onSearch({ q: q.q, maxPrice: q.maxPrice, minDays, maxDays });
    document.getElementById('trips')?.scrollIntoView();
  };

  return (
    <section className="search-section" aria-label="Search trips">
      <div className="wrap">
        <form className="search" onSubmit={submit} role="search">
          <div><label htmlFor="s-q">Destination</label><input id="s-q" placeholder="Where do you want to go?" value={q.q} onChange={set('q')} /></div>
          <div>
            <label htmlFor="s-p">Budget</label>
            <select id="s-p" value={q.maxPrice} onChange={set('maxPrice')}>
              <option value="">Any budget</option><option value="1000">Under $1,000</option>
              <option value="2500">Under $2,500</option><option value="4000">Under $4,000</option>
            </select>
          </div>
          <div>
            <label htmlFor="s-d">Length</label>
            <select id="s-d" value={q.duration} onChange={set('duration')}>
              <option value="">Any Duration</option><option value="1-3">1–3 Days</option>
              <option value="4-7">4–7 Days</option><option value="8-14">8–14 Days</option>
              <option value="15+">15+ Days</option>
            </select>
          </div>
          <button className="btn" type="submit">Find Trips</button>
        </form>
      </div>
    </section>
  );
}
