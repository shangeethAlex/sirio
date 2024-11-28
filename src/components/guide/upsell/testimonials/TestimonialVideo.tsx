import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialVideoProps {
  src: string;
  aspectRatio: string;
  width?: string;
}

const TestimonialVideo = ({ src, aspectRatio, width = "100%" }: TestimonialVideoProps) => {
  return (
    <div className={`relative ${width}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-sirio-yellow/20 to-sirio-blue/20 rounded-2xl blur-xl opacity-75"></div>
      <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-white/10">
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '0', 
            paddingTop: aspectRatio, 
            overflow: 'hidden', 
            backgroundColor: 'transparent' 
          }}
        >
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
            src={src}
            title="Vocal Video"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideo;