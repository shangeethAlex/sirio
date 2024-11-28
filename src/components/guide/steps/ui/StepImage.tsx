import React from 'react';
import { motion } from 'framer-motion';

interface StepImageProps {
  src: string;
  alt: string;
}

const StepImage = ({ src, alt }: StepImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-4 mb-4 rounded-lg overflow-hidden bg-gray-100"
    >
      <img
        src={src}
        alt={alt}
        className="w-full max-h-[200px] object-contain"
      />
    </motion.div>
  );
};

export default StepImage;