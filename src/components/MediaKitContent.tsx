import React from 'react';
import { motion } from 'framer-motion';
import WhatIDo from './WhatIDo';
import MediaKitPreview from './MediaKitPreview';

const MediaKitContent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative max-w-7xl mx-auto px-4 mb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <WhatIDo />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center"
        >
          <MediaKitPreview />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MediaKitContent;