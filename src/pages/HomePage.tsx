import React, { useEffect } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutStatsSection } from '@/components/home/AboutStatsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { MarqueeTicker } from '@/components/home/MarqueeTicker';
import { ProductCollectionBanner } from '@/components/home/ProductCollectionBanner';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { QualityCommitmentSection } from '@/components/home/QualityCommitmentSection';
import { LocationContactSection } from '@/components/home/LocationContactSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutStatsSection />
      <WhyChooseUsSection />
      <MarqueeTicker />
      <ProductCollectionBanner />
      <IndustriesSection />
      <TestimonialsSection />
      <QualityCommitmentSection />
      <LocationContactSection />
    </>
  );
};
