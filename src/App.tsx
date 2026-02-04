import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load components below the fold
const CategoryGrid = lazy(() => import('./components/CategoryGrid'));
const TrendingCarousel = lazy(() => import('./components/TrendingCarousel'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function App() {
  return (
    <div className="min-h-screen bg-lum-bg w-full">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-lum-gold/50">Loading Collections...</div>}>
          <CategoryGrid />
          <TrendingCarousel />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
