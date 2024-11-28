import React from 'react';
import { motion } from 'framer-motion';

const GuideChoiceHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left space-y-6 lg:sticky lg:top-24"
    >
      <div className="relative w-full max-w-lg mx-auto lg:mx-0 mb-8">
        <div className="absolute -inset-1 bg-sirio-yellow/20 blur-xl" />
        <motion.img
          src="https://i.ibb.co/XyRZ1br/free.png"
          alt="Free AI Guide"
          className="relative w-full h-auto rounded-2xl sm:block hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="https://i.ibb.co/XyRZ1br/free.png"
          alt="Free AI Guide"
          className="relative w-48 h-auto rounded-xl mx-auto sm:hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        <span className="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow bg-clip-text text-transparent">
          Free Realistic AI Avatar Guide
        </span>
      </h1>
      <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
        Start your journey into AI avatar creation with our comprehensive guide
      </p>
    </motion.div>
  );
};

export default GuideChoiceHeader;