import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leistungen from './components/Leistungen';
import Galerie from './components/Galerie';
import UeberUns from './components/UeberUns';
import Oeffnungszeiten from './components/Oeffnungszeiten';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Leistungen />
        <Galerie />
        <UeberUns />
        <Oeffnungszeiten />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
