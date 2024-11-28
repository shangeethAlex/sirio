import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Target, ArrowUpRight } from 'lucide-react';

const WhatIDo = () => {
  const points = [
    {
      icon: Sparkles,
      title: "High-Converting Content",
      description: "Creating shareable organic content that delivers measurable results—driving engagement and boosting conversions."
    },
    {
      icon: Rocket,
      title: "AI-Powered Innovation",
      description: "Leveraging AI technology to streamline content creation, blending creative storytelling with strategic delivery."
    },
    {
      icon: Target,
      title: "Strategic Impact",
      description: "Focus on creative direction and data-driven outcomes that help brands unlock their full potential."
    }
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-radial from-sirio-yellow/5 to-transparent blur-2xl"
      />

      <div className="relative space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-sirio-yellow to-white bg-clip-text text-transparent">
            What I Do
          </span>
        </motion.h2>

        <div className="space-y-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl group-hover:from-sirio-yellow/10 transition-colors duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-sirio-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4"
        >
          <a
            href="mailto:sirio@visionreimagine.com?subject=Let's%20Work%20Together&body=Hi%20Sirio,%0D%0A%0D%0AI'd%20love%20to%20discuss%20working%20together.%0D%0A%0D%0ABest%20regards,"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-sirio-yellow text-black rounded-2xl font-medium hover:bg-sirio-yellow/90 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Work With Me</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIDo;