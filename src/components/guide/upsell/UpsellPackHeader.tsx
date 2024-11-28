import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowUpRight } from 'lucide-react';

const UpsellPackHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-12"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sirio-yellow/10 to-sirio-blue/10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center gap-8">
        {/* Guide Cover */}
        <div className="relative w-48 sm:w-56">
          <div className="absolute -inset-1 bg-sirio-yellow/20 blur-xl" />
          <img
            src="https://i.ibb.co/wJmNVRF/free.png"
            alt="Pro AI Avatar Guide"
            className="relative w-full h-auto rounded-xl"
          />
        </div>

        {/* Guide Info */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sirio-yellow/10 rounded-full mb-4">
            <Crown className="w-4 h-4 text-sirio-yellow" />
            <span className="text-sm font-medium text-sirio-yellow">Pro Guide</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Master AI Portrait Creation
          </h1>
          
          <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-2xl">
            Take your AI portraits to the next level with advanced techniques, celebrity integration, 
            and professional fine-tuning strategies. Perfect for creators who want to achieve 
            stunning, professional-quality results.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sirio-yellow text-black rounded-xl font-medium hover:bg-sirio-yellow/90 transition-colors group"
            >
              Get Pro Access Now
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-xl rounded-xl">
              <span className="text-2xl font-bold text-white">$24.99</span>
              <span className="text-sm text-gray-400">one-time payment</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UpsellPackHeader;