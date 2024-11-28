import React from 'react';
import { motion } from 'framer-motion';

const MediaKitHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-[40vh] flex flex-col items-center justify-center mb-8 sm:mb-12 overflow-hidden pt-8"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 100% 100%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 0% 100%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 100% 0%, rgba(4,59,95,0.2) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6"
        >
          {/* Enhanced Glow Effect */}
          <div className="absolute -inset-4 rounded-full bg-sirio-yellow/20 blur-2xl animate-pulse" />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sirio-yellow/30 to-sirio-blue/30 blur-xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-sirio-yellow/20">
            <img
              src="https://i.ibb.co/6v8BcSF/Sirio.jpg"
              alt="Sirio Berati"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-3">
            <span className="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow bg-clip-text text-transparent">
              Sirio Berati
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light">
            AI Digital Creator
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2 }
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-sirio-yellow/50 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default MediaKitHeader;