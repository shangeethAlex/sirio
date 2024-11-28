import React from 'react';
import StepImage from '../../ui/StepImage';

const CfgSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">7</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">CFG</h3>
          <p>Leave this at 3.5.</p>
          <StepImage 
            src="https://i.ibb.co/NFK5kNg/CFG.png"
            alt="CFG Interface"
          />
        </div>
      </div>
    </div>
  );
};

export default CfgSection;