import FeeFreeSection from '../components/home/FeeFreeSection';
import HeroSection from '../components/home/HeroSection';
import BigWinsSection from '../components/home/BigWinsSection';
import WaysWeCanHelpSection from '../components/home/WaysWeCanHelpSection';
import CaseTypesSection from '../components/home/CaseTypesSection';
import FacesOfJusticeSection from '../components/home/FacesOfJusticeSection';
import CompensationSection from '../components/home/CompensationSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import FightingForPeopleSection from '../components/home/FightingForPeopleSection';
import WeKnowYourPainSection from '../components/home/WeKnowYourPainSection';
import InsightsResourcesSection from '../components/home/InsightsResourcesSection';
import FeeFreeFormSection from '../components/home/FeeFreeFormSection';
import GetJusticeStepsSection from '../components/home/GetJusticeStepsSection';
import ReviewsSection from '../components/home/ReviewsSection';

export default function Home() {
  return (
    <>
      <FeeFreeSection />
      <HeroSection />

      <GetJusticeStepsSection />
      <BigWinsSection />
      <WaysWeCanHelpSection />
      <CaseTypesSection />
      <FacesOfJusticeSection />
      <CompensationSection />
      <ReviewsSection />
      <HowItWorksSection />

      <FightingForPeopleSection />
     
      <InsightsResourcesSection />
      <FeeFreeFormSection />
    </>
  );
}

