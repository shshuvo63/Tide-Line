export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#top" aria-label="Tideline Travel home">
              <span className="footer-mark" aria-hidden="true">T</span>
              <span>Tideline<span className="footer-logo-light"> Travel</span></span>
            </a>
            <p>Trips planned by people who have been there. Find your next favorite place with a little help from ours.</p>
            <a className="footer-cta" href="#contact">
              Let’s plan your trip
              <span aria-hidden="true">↗</span>
            </a>
            <div className="footer-trip-card" aria-hidden="true">
              <span className="footer-trip-card-label">YOUR NEXT CHAPTER</span>
              <span className="footer-trip-card-title">Somewhere by the sea</span>
              <span className="footer-trip-card-compass">↗</span>
            </div>
          </div>

          <nav className="footer-links" aria-label="Explore">
            <h2>Explore</h2>
            <ul>
              <li><a href="#trips">Find a trip</a></li>
              <li><a href="#offers">Special offers</a></li>
              <li><a href="#faq">Travel FAQ</a></li>
            </ul>
          </nav>

          <nav className="footer-links" aria-label="Plan with us">
            <h2>Plan with us</h2>
            <ul>
              <li><a href="#newsletter">Get trip ideas</a></li>
              <li><a href="#contact">Talk to a planner</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h2>Say hello</h2>
            <p>Have a question or an idea? We’d love to hear about it.</p>
            <div className="footer-contact-list">
              <a className="footer-contact-item" href="mailto:hello@tideline.example">
                <span className="footer-contact-icon" aria-hidden="true">@</span>
                <span><small>Email us</small>hello@tideline.example</span>
              </a>
              <a className="footer-contact-item" href="tel:+8801700000000">
                <span className="footer-contact-icon" aria-hidden="true">↗</span>
                <span><small>Call us</small>+880 1700 000000</span>
              </a>
              <div className="footer-contact-item footer-location">
                <span className="footer-contact-icon" aria-hidden="true">⌖</span>
                <span><small>Find us</small>Khulna, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tideline Travel</span>
          <span className="footer-note">Made for curious travelers, wherever you’re headed.</span>
          <a className="footer-top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
        <p className="footer-demo">Demo project — payments are not processed.</p>
      </div>
    </footer>
  );
}
