import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, ArrowRight } from 'lucide-react';

const UpsellHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left space-y-6"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-sirio-yellow/10 rounded-full">
        <Crown className="w-5 h-5 text-sirio-yellow" />
        <span className="text-sm font-medium text-sirio-yellow">Pro Guide</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
        <span className="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow bg-clip-text text-transparent">
          Master the Secret to
          <br />
          Ultra-Realistic AI Portraits
        </span>
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl">
        Unlock my exclusive skin texture enhancement system that transforms AI-generated portraits from artificial to incredibly lifelike
      </p>

      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        <a
          href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors group"
        >
          Get Pro Access Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="flex items-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-xl rounded-full">
          <Star className="w-5 h-5 text-sirio-yellow" />
          <span className="text-white font-medium">4.9/5 from 100+ creators</span>
        </div>
      </div>
    </motion.div>
  );
};

export default UpsellHeader;