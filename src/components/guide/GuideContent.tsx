import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GuideHeader from './GuideHeader';
import GuideProgress from './GuideProgress';
import GuideSteps from './GuideSteps';
import GuideNavigation from './GuideNavigation';

const GuideContent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col"
    >
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[300px,1fr] gap-6">
          <div className="lg:sticky lg:top-0 lg:h-screen lg:pt-6">
            <GuideHeader />
            <GuideProgress currentStep={currentStep} />
            
            {/* Mobile Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="flex flex-col items-center mt-2 lg:hidden"
            >
              <div className="px-4 py-2 bg-sirio-blue/10 rounded-full">
                <div className="flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-sirio-blue animate-bounce" />
                  <span className="text-sm text-sirio-blue font-medium">Scroll to continue</span>
                  <ChevronDown className="w-5 h-5 text-sirio-blue animate-bounce" />
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:py-6">
            <GuideSteps currentStep={currentStep} />
          </div>
        </div>
      </div>
      <GuideNavigation 
        currentStep={currentStep} 
        onNext={handleNext} 
        onPrev={handlePrev}
      />
    </motion.div>
  );
};

export default GuideContent;