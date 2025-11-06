import Header from './components/Header';
import Footer from './components/Footer';
import FeeFreeSection from './components/FeeFreeSection';
import HeroSection from './components/HeroSection';
import BigWinsSection from './components/BigWinsSection';
import WaysWeCanHelpSection from './components/WaysWeCanHelpSection';
import CaseTypesSection from './components/CaseTypesSection';
import FacesOfJusticeSection from './components/FacesOfJusticeSection';
import CompensationSection from './components/CompensationSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import FightingForPeopleSection from './components/FightingForPeopleSection';
import WeKnowYourPainSection from './components/WeKnowYourPainSection';
import InsightsResourcesSection from './components/InsightsResourcesSection';
import FeeFreeFormSection from './components/FeeFreeFormSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FeeFreeSection />
        <HeroSection />
        
        <BigWinsSection />
        <WaysWeCanHelpSection />
        <CaseTypesSection />
        <FacesOfJusticeSection />
        <CompensationSection />
        <TestimonialsSection />
        <HowItWorksSection />
      
        <FightingForPeopleSection />
        <WeKnowYourPainSection />
        <InsightsResourcesSection />
        <FeeFreeFormSection />
      </main>
      <Footer />
    </div>
  );
}