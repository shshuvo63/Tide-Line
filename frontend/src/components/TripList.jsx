import TripCard from './TripCard.jsx';

const REGIONS = ['All', 'Europe', 'Asia', 'Africa', 'Americas'];

export default function TripList({ region, onRegion, trips, loading, error, saved, onToggleSave, onBook }) {
  return (
    <section id="trips">
      <div className="wrap">
        <div className="trips-heading">
          <span className="trips-kicker">Find your somewhere</span>
          <h2>Featured <span>trips</span></h2>
        </div>
        <p className="sub">{loading ? 'Loading trips…' : `${trips.length} trips match. You have saved ${saved.length}.`}</p>
        <div className="chips">
          {REGIONS.map((r) => (
            <button key={r} className="chip" aria-pressed={region === r} onClick={() => onRegion(r)}>{r}</button>
          ))}
        </div>
        {error && <div className="msg" role="alert">{error}</div>}
        {!loading && !error && trips.length === 0 && <p>No trips match those filters. Raise your budget or clear the destination.</p>}
        <div className="grid">
          {trips.map((t) => (
            <TripCard key={t.id} trip={t} isSaved={saved.includes(t.id)} onToggleSave={onToggleSave} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
}
