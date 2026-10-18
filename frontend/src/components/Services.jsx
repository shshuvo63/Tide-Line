const services = [
  ['✈️', 'Flights and transfers', 'We book your flights and arrange airport pickups so you never wait at arrivals.'],
  ['🏨', 'Hand-picked stays', 'Every hotel and lodge is visited by our team before we recommend it.'],
  ['🧭', 'Local guides', 'Small-group guides who live where you travel and know the quiet spots.'],
  ['🛡️', 'Travel insurance', 'Cover for medical costs, cancellations and lost bags, set up with your booking.'],
  ['🛂', 'Visa help', 'We check entry rules for your passport and prepare your documents.'],
  ['📞', '24/7 trip support', 'One planner stays on call, by phone or chat, until you are home.'],
];

export default function Services() {
  return (
    <section id="services" className="alt">
      <div className="wrap">
        <h2>Everything handled for you</h2>
        <p className="sub">Plan once and we take care of the rest, from the first flight to the last transfer home.</p>
        <div className="grid">
          {services.map(([icon, title, text]) => (
            <article className="card pad" key={title}>
              <span className="icon-badge" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p className="about">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
