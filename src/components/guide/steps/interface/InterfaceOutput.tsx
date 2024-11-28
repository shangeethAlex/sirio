import React from 'react';
import { motion } from 'framer-motion';
import StepImage from '../ui/StepImage';

const InterfaceOutput = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="prose prose-lg mx-auto text-gray-600"
      >
        <h2 className="text-2xl font-bold text-gray-900">Output Section</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">1</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
                <p>
                  On the right, you'll see your generated output. It also displays an estimate 
                  of the cost for each generation.
                </p>
                <StepImage 
                  src="https://i.ibb.co/m8z8fDw/Screenshot-2024-11-26-at-9-09-11-PM.png"
                  alt="Results Interface"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">2</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Status</h3>
                <p>
                  These are the logs computing to generate your AI image. You can ignore them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InterfaceOutput;