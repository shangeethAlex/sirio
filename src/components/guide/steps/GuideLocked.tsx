import React from 'react';
import { motion } from 'framer-motion';
import LockedCard from './locked/LockedCard';

const GuideLocked = () => {
  const lockedCards = [
    {
      title: "Generate Realistic Images of Your Digital Avatar",
      description: "It's time to bring your digital avatar to life! Let's go to the Prompt box on the left side of the interface. Remember your trigger word? Mine was \"Sirio\". If you've followed the steps correctly, it should be displayed in the prompt section.",
      features: [
        { label: "Image Size", value: "Locked" },
        { label: "Number of Steps", value: "Locked" },
        { label: "Seed", value: "Locked" },
        { label: "LoRAs 1", value: "Locked" },
        { label: "LoRAs 2", value: "Locked" },
        { label: "Scale", value: "1.3 (Locked)" },
        { label: "Guidance", value: "Locked" }
      ]
    },
    {
      title: "BONUS: Celebrity Integration",
      subtitle: "Generate Images with Your Favorite Celebrities",
      description: "Create stunning photos featuring you alongside famous personalities with our advanced celebrity integration techniques.",
      features: [
        { label: "Celebrity LoRAs", value: "Locked" },
        { label: "Celebrity Model Links", value: "Locked" },
        { label: "Advanced Methods", value: "Locked" }
      ]
    },
    {
      title: "Realistic Skin Texture Guide",
      subtitle: "The Secret Sauce You Won't Find Anywhere Else",
      description: "After months of experimentation and countless tests, I've cracked the code to achieving ultra-realistic skin textures in AI portraits—something you won't find in any other guide. My exclusive combination of custom LoRAs and specialized techniques creates a level of photorealism that makes your AI portraits indistinguishable from real photos. This isn't just another AI avatar guide; it's the missing piece that transforms good portraits into exceptional ones.",
      features: [
        { label: "Custom Skin Texture LoRAs", value: "2 Premium LoRAs for photorealistic skin (Exclusive to this guide)" },
        { label: "iPhone Style LoRA", value: "Achieve authentic iPhone photo aesthetics (Not available elsewhere)" },
        { label: "Advanced Methods", value: "My proprietary fine-tuning techniques (Unique to this system)" }
      ],
      exampleImage: {
        url: "https://i.ibb.co/Xk9HXBs/ly4kzikzc1soestzwm1da962a347379646448d1e55ac542dc0acasdfads.png",
        label: "AI generated pic using my exclusive skin texture system"
      }
    },
    {
      title: "Creative Prompt Packs",
      subtitle: "Premium Prompts for Cinematic Results",
      description: "Access my personal collection of carefully crafted prompts that consistently deliver stunning, cinematic results.",
      features: [
        { label: "Cinematic Prompt Pack", value: "Locked" },
        { label: "Style Variations", value: "Multiple style options (Locked)" }
      ],
      images: [
        "https://i.ibb.co/pXx7fYd/Screenshot-2024-11-27-at-9-18-44-AM.png",
        "https://i.ibb.co/7r11qVm/Screenshot-2024-11-27-at-9-18-40-AM.png",
        "https://i.ibb.co/TYsr8GC/Screenshot-2024-11-27-at-9-18-37-AM.png",
        "https://i.ibb.co/hWjwZQW/Screenshot-2024-11-27-at-9-18-34-AM.png"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {lockedCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <LockedCard {...card} />
        </motion.div>
      ))}

      <div className="p-4 bg-sirio-yellow/5 rounded-lg border border-sirio-yellow/10">
        <p className="text-sm text-gray-600">
          <span className="font-medium text-sirio-yellow">Note:</span>{' '}
          These settings are part of our Pro Guide, which includes advanced techniques for achieving 
          professional-quality results. Ready to take your AI avatar to the next level?
        </p>
      </div>
    </div>
  );
};

export default GuideLocked;