import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GuideComparison from './GuideComparison';
import GuideTraining from './GuideTraining';
import GuideInterface from './GuideInterface';
import GuideLocked from './GuideLocked';

const steps = [
  {
    component: GuideComparison,
    title: "Introduction",
  },
  {
    component: GuideTraining,
    title: "Training Your Digital Avatar",
  },
  {
    component: GuideInterface,
    title: "Understanding the Interface",
  },
  {
    component: GuideLocked,
    title: "Generate Images",
  }
];

const GuideSteps = ({ currentStep }: { currentStep: number }) => {
  const navigate = useNavigate();

  // Navigate to pro guide page when reaching the last step
  if (currentStep >= steps.length) {
    navigate('/guide/pro');
    return null;
  }

  const StepComponent = steps[currentStep].component;

  return (
    <div className="mt-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <StepComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GuideSteps;