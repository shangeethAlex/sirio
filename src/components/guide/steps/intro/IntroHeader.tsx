import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, BookOpen, Code } from 'lucide-react';

const IntroHeader = () => {
  const features = [
    {
      icon: Clock,
      text: "5-10 minutes setup",
    },
    {
      icon: BookOpen,
      text: "Beginner friendly",
    },
    {
      icon: Code,
      text: "No coding required",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mb-12"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-sirio-yellow/10 to-transparent blur-2xl" />

      <div className="relative bg-black/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        {/* Animated Sparkle */}
        <motion.div
          className="absolute -top-3 -right-3 w-8 h-8 bg-sirio-yellow/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-sirio-yellow/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-sirio-yellow" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Transform Your Digital Presence</h1>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to the future of digital creation! In this guide, you'll learn how to create 
          stunning AI portraits that look incredibly realistic. Whether you're a creator, professional, 
          or enthusiast, this step-by-step guide will help you master AI avatar creation.
        </p>

        <div className="flex flex-wrap gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-sirio-yellow opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity duration-300" />
              
              {/* Label */}
              <div className="relative flex items-center gap-2 px-4 py-2.5 bg-black/80 rounded-full border border-sirio-yellow/30 shadow-lg shadow-black/10">
                <feature.icon className="w-4 h-4 text-sirio-yellow" />
                <span className="text-sm font-medium text-sirio-yellow whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IntroHeader;