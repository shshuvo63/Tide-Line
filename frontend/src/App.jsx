import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SearchSection from './components/SearchSection.jsx';
import TripList from './components/TripList.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Offers from './components/Offers.jsx';
import Highlights from './components/Highlights.jsx';
import Faq from './components/Faq.jsx';
import Newsletter from './components/Newsletter.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import { useTrips } from './hooks/useTrips.js';
import { useSavedTrips } from './hooks/useSavedTrips.js';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const [search, setSearch] = useState({ q: '', maxPrice: '', minDays: '', maxDays: '' });
  const [region, setRegion] = useState('All');
  const [booking, setBooking] = useState(null);
  const { theme, toggle: toggleTheme } = useTheme();
  const { saved, toggle } = useSavedTrips();
  const { trips, loading, error } = useTrips({ ...search, region });

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <SearchSection onSearch={setSearch} />
      <TripList
        region={region} onRegion={setRegion}
        trips={trips} loading={loading} error={error}
        saved={saved} onToggleSave={toggle} onBook={setBooking}
      />
      <Services />
      <HowItWorks />
      <Offers />
      <Highlights />
      <Faq />
      <Newsletter />
      <ContactForm />
      <Footer />
      {booking && <BookingModal trip={booking} onClose={() => setBooking(null)} />}
    </>
  );
}
