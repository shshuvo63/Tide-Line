const faqs = [
  ['How much do I pay upfront?', 'A 20% deposit confirms your booking. The balance is due 45 days before you leave.'],
  ['Can I change or cancel a trip?', 'You can change dates free of charge up to 60 days before departure. Cancellation terms are listed on each itinerary.'],
  ['Are flights included in the price?', 'Trip prices cover stays, transfers, guides and listed activities. We add flights for you at cost if you ask.'],
  ['Do you plan trips for large groups?', 'Yes. We organise groups from 2 to 30 travelers, including families and company trips.'],
  ['What if something goes wrong while I travel?', 'Call or message your planner at any hour. We rebook flights, hotels and transfers on your behalf.'],
];

export default function Faq() {
  return (
    <section id="faq" className="faq-section">
      <div className="wrap faq-wrap">
        <div className="faq-heading">
          <span className="section-kicker"><span aria-hidden="true">✳</span> The useful details</span>
          <h2>Questions, answered</h2>
          <p>Everything you need to feel good about the journey ahead.</p>
        </div>
        <div className="faq">
          {faqs.map(([q, a], index) => (
            <details className="faq-item" key={q}>
              <summary>
                <span className="faq-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-question">{q}</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
