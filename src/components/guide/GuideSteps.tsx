import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GuideComparison from './steps/GuideComparison';
import GuideTraining from './steps/GuideTraining';
import GuideInterface from './steps/GuideInterface';
import GuideLocked from './steps/GuideLocked';
import GuideExamples from './steps/GuideExamples';

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
  },
  {
    component: GuideExamples,
    title: "Examples",
  }
];

const GuideSteps = ({ currentStep }: { currentStep: number }) => {
  const navigate = useNavigate();

  // Only navigate to pro guide after completing all steps
  if (currentStep >= steps.length) {
    navigate('/guide/pro');
    return null;
  }

  const StepComponent = steps[currentStep]?.component;

  if (!StepComponent) return null;

  return (
    <div className="mt-12">
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