import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Lock, Crown } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Ultra-Realistic Skin Texture",
    description: "Exclusive access to my proprietary skin texture LoRAs—the secret behind achieving photorealistic results that look indistinguishable from real photos."
  },
  {
    icon: Star,
    title: "Professional Results",
    description: "Master advanced techniques that transform AI portraits from artificial-looking to stunningly lifelike using my custom texture enhancement methods."
  },
  {
    icon: Lock,
    title: "Exclusive Prompts",
    description: "Get my personal collection of proven prompts optimized for natural skin rendering and authentic photo aesthetics."
  },
  {
    icon: Crown,
    title: "Expert Guidance",
    description: "Step-by-step tutorials focused on achieving the perfect skin texture and photorealistic quality in every generation."
  }
];

const UpsellFeatures = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid sm:grid-cols-2 gap-6"
    >
      {features.map((feature, index) => (
        <div 
          key={feature.title}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sirio-yellow/20 to-sirio-blue/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 h-full">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-sirio-yellow" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default UpsellFeatures;