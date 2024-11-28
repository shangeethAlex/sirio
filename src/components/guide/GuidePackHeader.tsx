import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const GuidePackHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-8"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sirio-yellow/10 to-sirio-blue/10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        {/* Guide Cover */}
        <div className="relative w-48 sm:w-56">
          <div className="absolute -inset-1 bg-sirio-yellow/20 blur-xl" />
          <img
            src="https://i.ibb.co/XyRZ1br/free.png"
            alt="AI Avatar Guide"
            className="relative w-full h-auto rounded-xl"
          />
        </div>

        {/* Guide Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sirio-yellow/10 rounded-full mb-4">
            <span className="text-sm font-medium text-sirio-yellow">Free Guide</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Realistic AI Model Training
          </h1>
          
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Learn how to create stunning AI portraits that look incredibly realistic. Perfect for beginners!
          </p>

          <a
            href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sirio-yellow text-black rounded-xl font-medium hover:bg-sirio-yellow/90 transition-colors group"
          >
            Unlock Pro Version
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GuidePackHeader;