
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
      <div ><HeroSection /></div>
      <div ><GallerySection /></div>
      <div ><AboutSection /></div>
      <div ><ServicesSection/></div>
      <div ><ContactSection /></div>
   

      <Footer />
    </>
  );
}
