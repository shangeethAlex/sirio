import React from 'react';
import { Lock } from 'lucide-react';
import StepImage from './StepImage';

interface StepCardProps {
  number: number;
  title: string;
  content: string;
  additionalContent?: string;
  features?: string[];
  proFeatures?: string[];
  image?: {
    src: string;
    alt: string;
  };
  image2?: {
    src: string;
    alt: string;
  };
  proContent?: boolean;
  proCallToAction?: string;
}

const StepCard = ({ 
  number, 
  title, 
  content, 
  additionalContent, 
  features,
  proFeatures,
  image,
  image2,
  proContent,
  proCallToAction
}: StepCardProps) => {
  return (
    <div className="bg-white shadow-sm border border-gray-100 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-sirio-blue text-white rounded-full flex items-center justify-center font-semibold">
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {proContent && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-sirio-blue/10 text-sirio-blue rounded-full text-xs font-medium">
                <Lock className="w-3 h-3" />
                PRO
              </span>
            )}
          </div>
          
          <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: content }} />
          
          {image && <StepImage {...image} />}
          
          {additionalContent && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: additionalContent }} />
            </div>
          )}

          {image2 && <StepImage {...image2} />}
          
          {features && features.length > 0 && (
            <div className="mt-6 bg-sirio-blue/5 rounded-lg border border-sirio-blue/10 p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-sirio-blue" />
                    <p className="text-sm text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {proFeatures && proFeatures.length > 0 && (
            <div className="mt-4 bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4 text-sirio-blue" />
                <h4 className="font-semibold text-gray-900">Pro Features:</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-sirio-blue rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-sirio-blue text-white text-sm font-medium rounded-full hover:bg-sirio-blue-dark transition-colors"
                >
                  {proCallToAction || 'Unlock Pro Guide'}
                  <Lock className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepCard;