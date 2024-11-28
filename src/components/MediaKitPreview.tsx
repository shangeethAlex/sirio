import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, AlertCircle } from 'lucide-react';

const MediaKitPreview = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full max-w-xl mx-auto"
      role="region"
      aria-label="Media Kit Preview"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10">
        {/* Loading State */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
        )}

        {/* Error State */}
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 text-gray-400">
            <AlertCircle className="w-8 h-8 mb-2" />
            <p className="text-sm">Failed to load preview</p>
          </div>
        ) : (
          <img
            src="https://i.ibb.co/FD7WG0N/Screenshot-2024-11-20-at-2-28-39-PM.png"
            alt="Sirio Berati Media Kit Preview"
            className={`w-full h-auto transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* CTA Button */}
      <a
        href="https://drive.google.com/file/d/1SztYAgj4zmg-6bqXiZPYmbT9wBC1QDQ8/view"
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sirio-yellow focus:ring-offset-2 focus:ring-offset-black overflow-hidden"
      >
        <span className="relative z-10">View Media Kit</span>
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-sirio-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </motion.div>
  );
};

export default MediaKitPreview;