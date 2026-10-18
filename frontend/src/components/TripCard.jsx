import { useState } from 'react';
import { getDestinationImage, FALLBACK_IMAGE, IMAGE_WIDTHS } from '../data/destinationImages.js';

function DestinationImage({ trip }) {
  const photo = getDestinationImage(trip.id);
  const [failed, setFailed] = useState(!photo);
  const [small, large] = IMAGE_WIDTHS;

  return (
    <div className="media">
      <img
        src={failed ? FALLBACK_IMAGE : photo.url(large)}
        srcSet={failed ? undefined : `${photo.url(small)} ${small}w, ${photo.url(large)} ${large}w`}
        sizes="(max-width: 600px) 100vw, 300px"
        alt={failed ? `${trip.name}, ${trip.place}` : photo.alt}
        width="800"
        height="450"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function TripCard({ trip, isSaved, onToggleSave, onBook }) {
  return (
    <article className="card">
      <DestinationImage trip={trip} />
      <div className="body">
        <div className="meta"><span>{trip.place}</span><span>★ {trip.rating}</span></div>
        <h3>{trip.name}</h3>
        <p className="about">{trip.about}</p>
        <div className="meta"><span>{trip.days} days</span></div>
        <div className="row">
          <div><span className="price">${trip.price.toLocaleString()}</span> <small>/ person</small></div>
          <div className="actions">
            <button className="chip" aria-pressed={isSaved} onClick={() => onToggleSave(trip.id)}>
              {isSaved ? 'Saved' : 'Save'}
            </button>
            <button className="btn" onClick={() => onBook(trip)}>Book</button>
          </div>
        </div>
      </div>
    </article>
  );
}
