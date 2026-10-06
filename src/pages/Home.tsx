import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { AboutPreview } from '../components/home/AboutPreview';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FacilitiesSection } from '../components/home/FacilitiesSection';
import { ActivitiesSection } from '../components/home/ActivitiesSection';
import { CampusLifeGallery } from '../components/home/CampusLifeGallery';
import { ParentReviews } from '../components/home/ParentReviews';
import { AdmissionCTA } from '../components/home/AdmissionCTA';

interface HomeProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiry }) => {
  const location = useLocation();

  // Scroll to hash element if exists (e.g. #facilities or #gallery)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero onOpenEnquiry={onOpenEnquiry} />
      <TrustBar />
      <AboutPreview />
      <ProgramsSection onOpenEnquiry={onOpenEnquiry} />
      <WhyChooseUs />
      <FacilitiesSection />
      <ActivitiesSection />
      <CampusLifeGallery />
      <ParentReviews />
      <AdmissionCTA />
    </div>
  );
};
