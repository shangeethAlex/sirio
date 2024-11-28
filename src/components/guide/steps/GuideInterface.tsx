import React from 'react';
import { motion } from 'framer-motion';
import InterfaceInput from './interface/InterfaceInput';
import InterfaceOutput from './interface/InterfaceOutput';

const GuideInterface = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="prose prose-lg mx-auto text-gray-600"
      >
        <p>
          We made it! But first, before starting the process of generating images, 
          let me explain a bit about the window we see here.
        </p>
      </motion.div>

      <InterfaceInput />
      <InterfaceOutput />
    </div>
  );
};

export default GuideInterface;