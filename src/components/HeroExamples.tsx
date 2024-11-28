import React from 'react';
import VisionHero from './heroes/VisionHero';
import DigitalCreativityHero from './heroes/DigitalCreativityHero';
import CreateWithoutLimitsHero from './heroes/CreateWithoutLimitsHero';

const HeroExamples = () => {
  return (
    <section className="space-y-16 mb-24">
      <VisionHero />
      <DigitalCreativityHero />
      <CreateWithoutLimitsHero />
    </section>
  );
};

export default HeroExamples;