import React from 'react';
import { Lock } from 'lucide-react';
import PremiumBadge from './PremiumBadge';

interface LockedFeature {
  label: string;
  value: string;
}

interface LockedCardProps {
  title: string;
  subtitle?: string;
  description: string;
  features: LockedFeature[];
  images?: string[];
  exampleImage?: {
    url: string;
    label: string;
  };
  isHighlighted?: boolean;
}

const LockedCard = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  images, 
  exampleImage,
  isHighlighted = title.includes("Realistic Skin Texture")
}: LockedCardProps) => {
  return (
    <div className={`
      bg-white shadow-sm border rounded-xl p-6 transition-all duration-300
      ${isHighlighted 
        ? 'border-sirio-yellow/50 shadow-sirio-yellow/20 shadow-lg relative' 
        : 'border-gray-100'
      }
    `}>
      {isHighlighted && (
        <div className="absolute -inset-px bg-gradient-to-r from-sirio-yellow/20 to-transparent rounded-xl blur-lg opacity-50" />
      )}

      <div className="relative flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <h3 className={`text-xl font-semibold ${isHighlighted ? 'text-sirio-yellow' : 'text-gray-900'}`}>
              {title}
            </h3>
            <PremiumBadge highlighted={isHighlighted} />
          </div>

          {subtitle && (
            <p className={`font-medium mb-2 ${isHighlighted ? 'text-sirio-yellow/90' : 'text-gray-700'}`}>
              {subtitle}
            </p>
          )}

          <p className="text-gray-600 mb-6">{description}</p>

          {/* Rest of the component remains the same */}
          {exampleImage && (
            <div className="mb-6">
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-100">
                <div style={{ paddingBottom: '56.25%' }} />
                <img
                  src={exampleImage.url}
                  alt={exampleImage.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2">
                  <p className="text-white text-xs font-medium">{exampleImage.label}</p>
                </div>
              </div>
            </div>
          )}

          <div className={`
            p-6 rounded-xl space-y-4
            ${isHighlighted ? 'bg-sirio-yellow/5 border border-sirio-yellow/10' : 'bg-gray-50'}
          `}>
            <h4 className="font-medium text-gray-900">Locked Features:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2">
                  <Lock className={`w-4 h-4 ${isHighlighted ? 'text-sirio-yellow' : 'text-sirio-yellow/70'}`} />
                  <div className="space-y-0.5">
                    <span className="text-sm text-gray-900">{feature.label}</span>
                    {feature.value && (
                      <p className="text-xs text-gray-500">{feature.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {images && images.length > 0 && (
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative rounded-lg overflow-hidden bg-gray-100"
                    style={{ paddingBottom: '133.33%' }}
                  >
                    <img
                      src={image}
                      alt={`Example ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LockedCard;