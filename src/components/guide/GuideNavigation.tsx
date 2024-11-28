import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface GuideNavigationProps {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
}

const GuideNavigation = ({ currentStep, onNext, onPrev }: GuideNavigationProps) => {
  const totalSteps = 5;
  const navigate = useNavigate();
  const scrollToTop = useScrollToTop();

  const handleNext = () => {
    scrollToTop();
    if (currentStep === totalSteps - 1) {
      navigate('/guide/pro');
    } else {
      onNext();
    }
  };

  const handlePrev = () => {
    scrollToTop();
    onPrev();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-3 px-4"
    >
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
        {/* Back to Guide - Mobile Only */}
        <Link
          to="/guide"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-200 sm:hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Guide
        </Link>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between gap-3 sm:w-full">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm
              transition-all duration-300 flex-1 justify-center
              ${currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300'
              }
            `}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="sm:inline hidden">Previous</span>
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: totalSteps }).map((_, step) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  step === currentStep ? 'bg-sirio-blue scale-110' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm bg-sirio-blue text-white hover:bg-sirio-blue-dark active:bg-sirio-blue-dark/90 transition-all duration-300 flex-1 justify-center"
          >
            <span className="sm:inline hidden">
              {currentStep === totalSteps - 1 ? 'Unlock Pro' : 'Next'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GuideNavigation;