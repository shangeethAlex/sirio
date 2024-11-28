import React from 'react';
import { motion } from 'framer-motion';
import IntroHeader from './intro/IntroHeader';
import IndustryUseCases from './intro/IndustryUseCases';

const GuideComparison = () => {
  return (
    <div className="space-y-12">
      <IntroHeader />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-gray-100"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 p-4 w-full">
            <div className="relative aspect-square">
              <img
                src="https://i.ibb.co/Dw5XSph/IMG-2057adfads.png"
                alt="Real Sirio"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/10">
                  Real Selfie
                </span>
              </div>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://i.ibb.co/hyCyJ6c/q5-Clwg6-W70c-Tq-D0s-DKjp-K-6da334cd9ac249f2addffcb1b821c0aa.jpg"
                alt="AI Sirio"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/10">
                  AI Generated
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-sirio-blue/5 rounded-xl p-6 border border-sirio-blue/10"
      >
        <p className="text-gray-600 mb-4">
          Here is a picture of myself, and this is my AI avatar. Quite close, right? Can you guess which one is the real me?
        </p>
        <p className="text-gray-600">
          In this guide, I'll show you how to create your own AI avatar that looks just as realistic. Let's get started!
        </p>
      </motion.div>

      <IndustryUseCases />
    </div>
  );
};

export default GuideComparison;