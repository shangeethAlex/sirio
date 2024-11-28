import React from 'react';
import StepImage from '../../ui/StepImage';

const PromptSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">1</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Prompt Section</h3>
          <p>This is where you type what you would like to see generated.</p>
          <StepImage 
            src="https://i.ibb.co/6nGp0G0/Prompt.png"
            alt="Prompt Section Interface"
          />
        </div>
      </div>
    </div>
  );
};

export default PromptSection;