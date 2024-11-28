import React from 'react';
import StepImage from '../../ui/StepImage';

const SeedSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">4</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Seed</h3>
          <p>This might be a bit tricky to understand if you've never used image generation tools like this before, but I'll try to explain it simply.</p>
          
          <StepImage 
            src="https://i.ibb.co/SV5MkQV/Screenshot-2024-11-26-at-9-39-43-PM.png"
            alt="Seed Interface"
          />

          <div className="mt-6 space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900">What is a Seed?</h4>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sirio-blue/10 flex items-center justify-center text-sirio-blue font-medium">1</div>
                  <p className="text-gray-600">
                    Imagine planting a seed in a garden. The type of plant that grows depends on the specific seed you use. Similarly, in our case, a "seed" is a number that acts like the initial set of instructions for creating an image.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sirio-blue/10 flex items-center justify-center text-sirio-blue font-medium">2</div>
                  <p className="text-gray-600">
                    Each seed produces a different result, just like how different seeds in a garden produce different plants. Even if you give the same input or description to the AI, changing the seed will produce variations in the image it generates.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sirio-blue/10 flex items-center justify-center text-sirio-blue font-medium">3</div>
                  <p className="text-gray-600">
                    In short, the seed is a way to control the randomness of the image generation process. If you use the same seed and the same input multiple times, you'll get the same image every time. But if you change the seed, the image will look different.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900">Example:</h4>
                <p className="mt-2 text-gray-600">
                  Let's say you use the prompt: "A portrait of a young woman with long brown hair and a friendly smile."
                </p>
              </div>

              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-900">Seed 5678</span>
                    <span className="px-2.5 py-1 bg-sirio-blue/10 text-sirio-blue rounded-full text-xs font-medium">
                      Original
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    This might generate a portrait of a young woman with slightly wavy brown hair, 
                    a gentle smile showing a bit of her teeth, and a soft background with warm lighting.
                  </p>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-900">Seed 5679</span>
                    <span className="px-2.5 py-1 bg-sirio-yellow/10 text-sirio-yellow rounded-full text-xs font-medium">
                      Variation
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    The portrait will have subtle differences: slightly straighter hair, 
                    a wider smile, different eye shape, cooler background lighting, 
                    or shifted shadow positions on the face.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-sirio-yellow/5 rounded-lg border border-sirio-yellow/10">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-sirio-yellow">Pro Tip:</span>{' '}
                When you find a seed that generates particularly good results, save it! You can reuse 
                the same seed with different prompts to maintain consistent characteristics across multiple 
                generations. This is especially useful when creating a series of images with a cohesive style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedSection;