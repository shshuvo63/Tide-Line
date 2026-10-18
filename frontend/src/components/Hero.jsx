import HeroCarousel from './HeroCarousel.jsx';
import { getDestinationImage } from '../data/destinationImages.js';

const JOURNEYS = [
  { id: 1, name: 'Santorini Escape', place: 'Greece' },
  { id: 2, name: 'Kyoto in Bloom', place: 'Japan' },
  { id: 4, name: 'Amalfi Coast Drive', place: 'Italy' },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <HeroCarousel />
      <div className="wrap hero-content">
        <h1>Trips planned by people who have been there</h1>
        <p>Pick a destination and we handle flights, stays and local guides, with one person on call for the whole trip.</p>
        <a className="btn" href="#trips">Browse trips</a>
        <p className="journeys-title">Popular journeys</p>
        <ul className="journeys">
          {JOURNEYS.map(({ id, name, place }) => {
            const photo = getDestinationImage(id);
            return (
              <li key={id}>
                <a className="journey" href="#trips">
                  <img src={photo.url(240)} alt="" width="240" height="135" loading="lazy" decoding="async" />
                  <span><strong>{name}</strong><small>{place}</small></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
