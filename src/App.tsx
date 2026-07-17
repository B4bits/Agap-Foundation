import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import PrayerWall from "./components/PrayerWall";
import ContactMap from "./components/ContactMap";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      {/* Radiant Golden Light-Ray Loader Overlay */}
      <Loader />

      <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-sky-500 selection:text-slate-950">
        
        {/* Dynamic Navigation Bar */}
        <Header />

        {/* Main Single Page Sections */}
        <main className="flex-grow">
          
          {/* Hero Banner Section */}
          <Hero />

          {/* Identity & Mission Section */}
          <About />

          {/* Holistic Restoration & Ministry programs */}
          <Programs />

          {/* Miraculous stories of healing & freedom */}
          <Testimonials />

          {/* Live gallery of worship, support and daily structure */}
          <Gallery />

          {/* Community FAQ */}
          <FAQ />

          {/* Active Prayer Wall Submission Frame */}
          <PrayerWall />

          {/* Contact information & schematic local maps */}
          <ContactMap />

        </main>

        {/* Global Brand Footer */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}

