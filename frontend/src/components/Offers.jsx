const offers = [
  ['Early booking', 'Save 10%', 'Book a trip at least 90 days ahead and take 10% off the trip price.'],
  ['Family trips', 'Kids half price', 'Children under 12 travel for half price on any trip with two adults.'],
  ['Honeymoons', 'Free upgrade', 'Get a room or villa upgrade on Maldives and Santorini trips, subject to availability.'],
];

export default function Offers() {
  return (
    <section id="offers" className="alt">
      <div className="wrap">
        <h2>Special offers</h2>
        <p className="sub">Offers apply to new bookings and cannot be combined.</p>
        <div className="grid">
          {offers.map(([tag, deal, text]) => (
            <article className="card pad offer" key={tag}>
              <span className="tag">{tag}</span>
              <p className="deal">{deal}</p>
              <p className="about">{text}</p>
              <a className="btn" href="#trips">Choose a trip</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
