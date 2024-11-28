import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Link2, Image, Sparkles, FileText, Star } from 'lucide-react';

const proFeatures = [
  {
    icon: Shield,
    title: "Exclusive Skin Texture System",
    description: "My proprietary skin texture enhancement technique - the secret behind ultra-realistic results",
    isPremium: true,
    isHighlighted: true
  },
  {
    icon: Users,
    title: "Access to Community",
    description: "Join our exclusive community of AI creators",
    isPremium: true
  },
  {
    icon: Link2,
    title: "Celebrity Model Links",
    description: "Curated collection of high-quality celebrity models"
  },
  {
    icon: FileText,
    title: "Software Resources",
    description: "Complete list of recommended tools and software"
  },
  {
    icon: Image,
    title: "Example Work",
    description: "Real-world examples and case studies"
  },
  {
    icon: Sparkles,
    title: "Easy Prompt Pack",
    description: "Ready-to-use prompts for stunning results"
  }
];

const UpsellFeaturesList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:sticky lg:top-24"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sirio-yellow to-sirio-blue rounded-2xl blur opacity-75" />
        <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">What's Included</h3>
              <div className="px-3 py-1 bg-sirio-yellow/10 rounded-full">
                <span className="text-sm font-medium text-sirio-yellow">$24.99</span>
              </div>
            </div>

            <div className="space-y-6">
              {proFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`relative ${
                    feature.isHighlighted 
                      ? 'bg-gradient-to-r from-sirio-yellow/20 to-transparent p-4 rounded-xl border border-sirio-yellow/30'
                      : feature.isPremium 
                        ? 'bg-sirio-yellow/5 p-4 rounded-xl border border-sirio-yellow/10' 
                        : ''
                  }`}
                >
                  {feature.isHighlighted && (
                    <div className="absolute -inset-px bg-gradient-to-r from-sirio-yellow/20 to-transparent rounded-xl blur-lg opacity-50" />
                  )}
                  <div className="relative flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      feature.isHighlighted 
                        ? 'bg-sirio-yellow/20'
                        : feature.isPremium 
                          ? 'bg-sirio-yellow/10' 
                          : 'bg-white/5'
                    }`}>
                      <feature.icon className={`w-4 h-4 ${
                        feature.isHighlighted || feature.isPremium 
                          ? 'text-sirio-yellow' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${
                          feature.isHighlighted 
                            ? 'text-sirio-yellow'
                            : feature.isPremium 
                              ? 'text-sirio-yellow' 
                              : 'text-white'
                        }`}>
                          {feature.title}
                        </span>
                        {feature.isHighlighted && (
                          <span className="px-2 py-0.5 bg-sirio-yellow text-black rounded-full text-xs font-bold">
                            EXCLUSIVE
                          </span>
                        )}
                        {feature.isPremium && !feature.isHighlighted && (
                          <span className="px-2 py-0.5 bg-sirio-yellow/10 rounded-full text-xs font-medium text-sirio-yellow">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
                      {feature.isHighlighted && (
                        <p className="text-xs text-sirio-yellow/80 mt-2 italic">
                          You won't find this technique anywhere else!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-sirio-yellow text-black rounded-xl font-medium hover:bg-sirio-yellow/90 transition-colors"
              >
                Get Instant Access
              </a>
              <p className="text-center text-sm text-gray-400 mt-4">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UpsellFeaturesList;