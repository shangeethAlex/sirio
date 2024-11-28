import React from 'react';
import { motion } from 'framer-motion';
import PromptSection from './input/PromptSection';
import ImageSize from './input/ImageSize';
import NumSteps from './input/NumSteps';
import SeedSection from './input/SeedSection';
import LorasSection from './input/LorasSection';
import ScaleSection from './input/ScaleSection';
import CfgSection from './input/CfgSection';
import NumImages from './input/NumImages';

const InterfaceInput = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="prose prose-lg mx-auto text-gray-600"
      >
        <h2 className="text-2xl font-bold text-gray-900">Input Section</h2>
        <p>On the left, you see your Input window. This is where you're going to bring your digital avatar to life.</p>

        <div className="space-y-6">
          <PromptSection />
          <ImageSize />
          <NumSteps />
          <SeedSection />
          <LorasSection />
          <ScaleSection />
          <CfgSection />
          <NumImages />
        </div>
      </motion.div>
    </div>
  );
};

export default InterfaceInput;