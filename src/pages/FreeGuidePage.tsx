import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GuideContent from '../components/guide/GuideContent';

const FreeGuidePage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Hidden on mobile, visible on desktop */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 hidden sm:block">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            to="/guide"
            className="flex items-center gap-2 text-sirio-blue hover:text-sirio-blue/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Guide Selection</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation - Fixed at bottom */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-t border-gray-200 sm:hidden">
        <div className="px-4 h-16 flex items-center">
          <Link 
            to="/guide"
            className="flex items-center gap-2 text-sirio-blue hover:text-sirio-blue/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Guide Selection</span>
          </Link>
        </div>
      </nav>

      {/* Content - Adjusted padding for mobile */}
      <div className="pt-4 sm:pt-24 pb-20 sm:pb-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <GuideContent />
        </div>
      </div>
    </main>
  );
};

export default FreeGuidePage;