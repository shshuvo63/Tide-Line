const stats = [['12,000+', 'travelers sent'], ['64', 'countries covered'], ['24/7', 'on-trip support'], ['4.8', 'average rating']];
const reviews = [
  ['Amina R.', 'Every transfer and hotel was sorted before we landed. We just enjoyed Kyoto.'],
  ['Daniel K.', 'Our guide in Tanzania was outstanding. Best trip we have taken as a family.'],
  ['Sofia M.', 'They rebuilt our Amalfi plan in one day when a flight changed. Calm and quick.'],
];

export default function Highlights() {
  return (
    <>
      <section id="why">
        <div className="wrap">
          <div className="stats">
            {stats.map(([n, l]) => <div key={l}><b>{n}</b>{l}</div>)}
          </div>
        </div>
      </section>
      <section id="reviews" className="flush-top">
        <div className="wrap">
          <h2>What travelers say</h2>
          <div className="grid">
            {reviews.map(([name, text]) => (
              <figure className="card quote" key={name}>
                <blockquote>“{text}”</blockquote>
                <figcaption><b>{name}</b></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
