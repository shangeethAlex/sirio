import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MediaKitHeader from '../components/MediaKitHeader';
import Analytics from '../components/Analytics';
import MediaKitContent from '../components/MediaKitContent';

const MediaKitPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-1.5 sm:gap-2 text-sirio-yellow hover:text-sirio-yellow/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <MediaKitHeader />
          <Analytics />
          <MediaKitContent />
        </div>
      </div>
    </main>
  );
};

export default MediaKitPage;