import Navbar from '@/components/Navbar'; // Add this import
import Hero from '@/components/Hero';
import Founder from '@/components/Founders';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar /> {/* Place it here */}
      <Hero />
      <Founder />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}