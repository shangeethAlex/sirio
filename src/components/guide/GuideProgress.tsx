import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  'Intro',
  'Train',
  'Setup',
  'Create',
  'Examples'
];

const GuideProgress = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="max-w-xl mx-auto mb-8 px-4 sm:px-6">
      <div className="relative">
        {/* Progress Bar */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200">
          <motion.div
            className="absolute top-0 left-0 h-full bg-sirio-blue"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 ${
                  index <= currentStep
                    ? 'bg-sirio-blue text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {index < currentStep ? (
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <span className="text-xs sm:text-sm font-medium">{index + 1}</span>
                )}
              </motion.div>
              <span className={`text-xs sm:text-sm font-medium ${
                index <= currentStep ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideProgress;