import React from 'react';
import { motion } from 'framer-motion';

const TrainingIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="prose prose-lg mx-auto text-gray-600"
    >
      <h2 className="text-2xl font-bold text-gray-900">Training Your Digital Avatar</h2>
      
      <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 mt-6">
        <p className="text-gray-600">
          First things first, let's train your digital AI avatar. You need 20-50 high-quality pictures 
          and selfies to achieve great results. Make sure the subject (that's you!) is clearly visible 
          and is in different settings and light conditions in your dataset. We want to feed AI as much 
          information as possible. Your dataset should also include pictures of your body to get the best results.
        </p>

        <div className="mt-4 p-4 bg-sirio-blue/5 rounded-lg border border-sirio-blue/10">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-sirio-blue">Pro Tip:</span>{' '}
            The quality and variety of your training images directly impact the quality of your AI avatar. 
            Include different angles, expressions, and lighting conditions for best results.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainingIntro;