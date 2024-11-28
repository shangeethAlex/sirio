import React from 'react';
import StepImage from '../../ui/StepImage';

const ImageSize = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">2</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Size</h3>
          <p>Here, you can choose the size of your image output. Different sizes give different results in look and feel.</p>
          <StepImage 
            src="https://i.ibb.co/5kQPfb3/Image-Size.png"
            alt="Image Size Interface"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSize;