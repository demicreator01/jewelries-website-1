import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import TrendingCarousel from './components/TrendingCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-lum-bg w-full">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <TrendingCarousel />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
