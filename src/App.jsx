
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <div id="home"><HeroSection /></div>
      <div id="gallery"><GallerySection /></div>
      <div id="about"><AboutSection /></div>
      <div id="services"><ServicesSection/></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </>
  );
}
