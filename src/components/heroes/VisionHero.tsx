import React from 'react';
import { motion } from 'framer-motion';

const VisionHero = () => {
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: 'blur(20px)',
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.3,
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-visible">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(235,228,0,0.15) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 100% 100%, rgba(235,228,0,0.15) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 0% 100%, rgba(235,228,0,0.15) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 100% 0%, rgba(235,228,0,0.15) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="flex flex-col items-center justify-center">
            <motion.div
              className="relative inline-block"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <span className="absolute -inset-2 sm:-inset-4 blur-2xl bg-sirio-yellow/30" />
              <span className="relative text-7xl sm:text-9xl font-bold text-white">Vision</span>
            </motion.div>
            <motion.div
              className="relative inline-block mt-[-0.5em]"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <span className="absolute -inset-2 sm:-inset-4 blur-2xl bg-gradient-to-r from-sirio-yellow/30 to-white/30" />
              <span className="relative text-7xl sm:text-9xl font-bold bg-gradient-to-r from-sirio-yellow to-white bg-clip-text text-transparent leading-[0.9] pb-4">
                Reimagined
              </span>
            </motion.div>
          </h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Experience the future of digital creation
          </motion.p>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <button className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
              Enter the Future
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionHero;