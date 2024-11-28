import React from 'react';
import StepImage from '../../ui/StepImage';

const LorasSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">5</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">LoRAs</h3>
          <p>
            LoRAs are your AI models. In this case, the model of yourself you trained earlier is a LoRA. 
            It is saved under a link, which you can find in the Path. Save that link somewhere in case you 
            lose it for easier access. That link contains information about your digital avatar. This is 
            important for the next steps, so please copy and paste this to your notes. You can add as many 
            LoRAs as you need.
          </p>
          <StepImage 
            src="https://i.ibb.co/RHkT9VJ/LoRAS.png"
            alt="LoRAs Interface"
          />
        </div>
      </div>
    </div>
  );
};

export default LorasSection;