import React from 'react';
import StepImage from '../../ui/StepImage';

const NumSteps = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">3</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Num of Steps</h3>
          <p>Leave this at 28 or 30.</p>
          <StepImage 
            src="https://i.ibb.co/SV5MkQV/Screenshot-2024-11-26-at-9-39-43-PM.png"
            alt="Number of Steps Interface"
          />
        </div>
      </div>
    </div>
  );
};

export default NumSteps;