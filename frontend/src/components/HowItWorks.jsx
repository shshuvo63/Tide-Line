const steps = [
  ['Tell us your plan', 'Share dates, budget and what you enjoy. A short form or a call both work.'],
  ['Get a draft itinerary', 'A planner sends a day-by-day plan with prices within two business days.'],
  ['Adjust and confirm', 'Change anything you like. Pay a deposit only when you are happy.'],
  ['Travel with support', 'Get your documents and a planner on call for the whole trip.'],
];

export default function HowItWorks() {
  return (
    <section id="process">
      <div className="wrap">
        <h2>How it works</h2>
        <p className="sub">Four steps from idea to boarding pass.</p>
        <ol className="steps">
          {steps.map(([title, text], i) => (
            <li className="card pad" key={title}>
              <span className="step-num" aria-hidden="true">{i + 1}</span>
              <h3>{title}</h3>
              <p className="about">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
