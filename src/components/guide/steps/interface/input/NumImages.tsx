import React from 'react';

const NumImages = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">8</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Number of Images</h3>
          <p>This is the number of images you want to generate in one run. I leave this at 1.</p>
        </div>
      </div>
    </div>
  );
};

export default NumImages;