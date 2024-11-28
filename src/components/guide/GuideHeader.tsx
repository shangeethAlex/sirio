import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const GuideHeader = () => {
  return (
    <div className="text-center space-y-3 px-4 sm:px-6 mb-4 sm:mb-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[160px] sm:max-w-sm mx-auto mb-3"
      >
        <div className="absolute -inset-1 bg-sirio-blue/20 blur-xl" />
        <img
          src="https://i.ibb.co/XyRZ1br/free.png"
          alt="Free AI Guide"
          className="relative w-full h-auto rounded-xl"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg sm:text-2xl font-bold text-gray-900"
      >
        Free AI Avatar Guide
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="prose prose-sm mx-auto text-gray-600 max-w-xl"
      >
        <p className="text-sm">
          Hey friend! I'm excited to show you how to train yourself using AI and take pictures with your favorite celebs.
        </p>
        <p className="text-xs text-gray-500">
          Note: This is a simple guide for beginners. For advanced methods, reach out to{' '}
          <a href="mailto:sirioberati@gmail.com" className="text-sirio-blue hover:text-sirio-blue-dark">
            sirioberati@gmail.com
          </a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-sirio-blue text-white rounded-full text-sm font-medium hover:bg-sirio-blue-dark transition-colors group"
        >
          Unlock the Pro Guide
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
};

export default GuideHeader;