import React from 'react';
import { motion } from 'framer-motion';

const UpsellTestimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      {/* Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-sirio-yellow/20 via-sirio-blue/20 to-sirio-yellow/20 rounded-3xl blur opacity-75" />
      
      {/* Content */}
      <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">What Students Say</h3>
        
        <div className="relative w-full">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="100%"
              src="https://vocalvideo.com/embed/v1/videos/169392"
              title="Student Testimonial"
              className="absolute inset-0 w-full h-full"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UpsellTestimonial;