import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import UpsellPackHeader from '../components/guide/upsell/UpsellPackHeader';
import UpsellFeatures from '../components/guide/upsell/UpsellFeatures';
import UpsellTestimonial from '../components/guide/upsell/UpsellTestimonial';
import UpsellFeaturesList from '../components/guide/upsell/UpsellFeaturesList';
import DiscountBanner from '../components/guide/upsell/DiscountBanner';

const GuideUpsellPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            to="/freeguide"
            className="flex items-center gap-2 text-sirio-yellow hover:text-sirio-yellow/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Guide</span>
          </Link>
        </div>
      </nav>

      {/* Discount Banner */}
      <DiscountBanner />

      {/* Content */}
      <div className="relative min-h-screen pt-36 pb-12">
        {/* Ambient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-sirio-blue-dark" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(235,228,0,0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(235,228,0,0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, rgba(235,228,0,0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, rgba(235,228,0,0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <UpsellPackHeader />
          
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-12">
              <UpsellFeatures />
              <UpsellTestimonial />
            </div>

            {/* Right Column - Features List */}
            <UpsellFeaturesList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideUpsellPage;