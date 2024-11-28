import React from 'react';
import GuideChoiceNav from '../components/guide/choice/GuideChoiceNav';
import GuideChoiceHeader from '../components/guide/choice/GuideChoiceHeader';
import GuideChoiceOptions from '../components/guide/choice/GuideChoiceOptions';
import GuideMetadata from '../components/guide/GuideMetadata';

const GuideChoicePage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <GuideMetadata />
      <GuideChoiceNav />

      {/* Content */}
      <div className="relative min-h-screen pt-24 pb-12">
        {/* Ambient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-sirio-blue/20" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr,1.5fr] lg:gap-12 lg:items-center lg:min-h-[calc(100vh-8rem)]">
            <GuideChoiceHeader />
            <GuideChoiceOptions />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideChoicePage;