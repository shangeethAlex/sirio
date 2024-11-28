import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Crown, Star, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const proFeatures = [
  "Easy Prompt Pack",
  "Example work",
  "Advanced Prompt settings",
  "Generate Realistic Images of Your Digital Avatar (Real Skin Texture)",
  "BONUS - Generate Images of Your Digital Avatar with a Celebrity"
];

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

const GuideProContent = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Premium Content Container */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Ambient Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-sirio-blue-dark" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(235,228,0,0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(235,228,0,0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 100%, rgba(235,228,0,0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 0%, rgba(235,228,0,0.15) 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Content */}
          <div className="relative p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sirio-yellow/10 rounded-full mb-6"
              >
                <Crown className="w-5 h-5 text-sirio-yellow" />
                <span className="text-sm font-medium text-sirio-yellow">Premium Content</span>
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Create Professional AI Avatars?
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Unlock advanced techniques and professional strategies in our comprehensive pro guide
              </p>
            </div>

            {/* Pro Features */}
            <div className="mb-12">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-6">What's Inside:</h4>
                <div className="grid gap-4">
                  {proFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-sirio-yellow flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Locked Chapters */}
            <div className="space-y-6 mb-12">
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
                          <h4 className="text-lg font-semibold text-white">{chapter.title}</h4>
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

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors group"
              >
                Unlock Pro Guide
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GuideProContent;