import React from 'react';
import { motion } from 'framer-motion';
import TestimonialVideo from './TestimonialVideo';

const testimonialVideos = [
  {
    src: "https://vocalvideo.com/embed/v1/videos/169392",
    aspectRatio: "56.25%", // 16:9
  },
  {
    src: "https://vocalvideo.com/embed/v1/videos/170297",
    aspectRatio: "56.25%", // 16:9
  },
  {
    src: "https://vocalvideo.com/embed/v1/videos/169394",
    aspectRatio: "177.78%", // 9:16
  }
];

const TestimonialGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonialVideos.slice(0, 2).map((video, index) => (
          <TestimonialVideo
            key={index}
            src={video.src}
            aspectRatio={video.aspectRatio}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <TestimonialVideo
          src={testimonialVideos[2].src}
          aspectRatio={testimonialVideos[2].aspectRatio}
          width="max-w-sm w-full"
        />
      </div>
    </motion.div>
  );
};

export default TestimonialGrid;