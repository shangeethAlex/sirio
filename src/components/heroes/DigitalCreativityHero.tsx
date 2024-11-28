import React from 'react';
import { motion } from 'framer-motion';

const DigitalCreativityHero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-visible">
      {/* Background Gradients */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 100% 100%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 0% 100%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 100% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 0% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Animated Blue Radial Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(4,59,95,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, rgba(4,59,95,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, rgba(4,59,95,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, rgba(4,59,95,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 30%, rgba(4,59,95,0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-[1.2] sm:leading-[1.2]">
            <span className="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow bg-clip-text text-transparent">
              Digital Creativity
              <br />
              Reimagined
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Where AI innovation meets artistic vision to create extraordinary digital experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors">
              View Portfolio
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalCreativityHero;