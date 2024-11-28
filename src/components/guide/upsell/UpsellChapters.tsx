import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Star, Sparkles } from 'lucide-react';

const lockedChapters = [
  {
    title: "Generate Realistic Images of Your Digital Avatar",
    subtitle: "Real Skin Texture",
    description: "It's time to bring your digital avatar to life! Let's go to the Prompt box on the left side of the interface. Remember your trigger word? Mine was \"Sirio\". If you've followed the steps correctly, it should be displayed in the prompt section.",
    settings: [
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
    title: "BONUS - Celebrity Integration",
    subtitle: "Generate Images with Your Favorite Celebrities",
    description: "Learn how to create stunning photos featuring you alongside famous personalities.",
    features: [
      "Advanced celebrity model integration",
      "Professional composition techniques",
      "Style matching strategies",
      "Scene control and optimization"
    ]
  }
];

const UpsellChapters = () => {
  return (
    <div className="space-y-6 mb-16">
      {lockedChapters.map((chapter, index) => (
        <motion.div
          key={chapter.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sirio-yellow/20 to-sirio-blue/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black/50 backdrop-blur-xl rounded-xl p-6 ring-1 ring-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                {index === 0 ? (
                  <Sparkles className="w-5 h-5 text-sirio-yellow" />
                ) : (
                  <Star className="w-5 h-5 text-sirio-yellow" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">{chapter.title}</h3>
                  <span className="px-2.5 py-0.5 bg-sirio-yellow/10 text-sirio-yellow rounded-full text-xs font-medium">
                    PRO
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{chapter.subtitle}</p>
                <p className="text-sm text-gray-500 mb-6">{chapter.description}</p>

                {chapter.settings && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {chapter.settings.map((setting) => (
                      <div key={setting.label} className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-sirio-yellow/70" />
                        <span className="text-sm">
                          <span className="text-gray-400">{setting.label}:</span>{' '}
                          <span className="text-gray-500">{setting.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {chapter.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {chapter.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-sirio-yellow/70" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UpsellChapters;