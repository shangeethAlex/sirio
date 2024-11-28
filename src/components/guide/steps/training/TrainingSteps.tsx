import React from 'react';
import { motion } from 'framer-motion';
import StepCard from '../ui/StepCard';
import { trainingSteps } from './trainingData';

const TrainingSteps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6"
    >
      {trainingSteps.map((step, index) => (
        <StepCard
          key={index}
          number={index + 1}
          title={step.title}
          content={step.content}
          additionalContent={step.additionalContent}
          features={step.features}
          image={step.image}
          image2={step.image2}
        />
      ))}
    </motion.div>
  );
};

export default TrainingSteps;