import React from 'react';
import { ArrowRight } from 'lucide-react';

const UpsellCTA = () => {
  return (
    <div className="text-center">
      <a
        href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors group"
      >
        Unlock Pro Guide
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default UpsellCTA;