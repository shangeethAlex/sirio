import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Globe, ArrowRight, Lock, Timer } from 'lucide-react';

const GuideChoiceOptions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-8 lg:mt-0 space-y-4 sm:space-y-6"
    >
      {/* Interactive Guide */}
      <Link
        to="/freeguide"
        className="group block relative"
      >
        {/* Limited Time Label */}
        <div className="absolute -top-3 left-4 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 rounded-full shadow-lg">
            <Timer className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-medium text-white">Free for the next 7 days</span>
          </div>
        </div>

        <div className="absolute -inset-0.5 bg-gradient-to-r from-sirio-yellow to-white rounded-xl sm:rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative bg-black/50 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-8 ring-1 ring-white/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 sm:w-8 sm:h-8 text-sirio-yellow" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-1 sm:mb-2">FREE Interactive Online Guide</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-6">
                Follow our step-by-step interactive guide with visual examples and detailed instructions.
                Perfect for beginners!
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-medium group-hover:bg-white/20 transition-colors ring-1 ring-white/20">
                Start Learning
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* PDF Version */}
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 ring-white/10">
        {/* Limited Time Label */}
        <div className="absolute -top-3 left-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 rounded-full shadow-lg">
            <Timer className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-medium text-white">Free for the next 7 days</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-medium text-white mb-1">Download FREE PDF Version</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
              Prefer reading offline? Get the complete guide as a PDF.
            </p>
            <a
              href="https://stan.store/heysirio/p/free-ai-guide-gkwdqt1x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors ring-1 ring-white/20"
            >
              Download PDF
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Pro Guide Section */}
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sirio-yellow/50 to-sirio-blue/50 rounded-xl sm:rounded-2xl blur opacity-25"></div>
        <div className="relative bg-black/50 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-8 ring-1 ring-white/10">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sirio-yellow/10 rounded-full">
              <Lock className="w-4 h-4 text-sirio-yellow" />
              <span className="text-xs sm:text-sm font-medium text-sirio-yellow">Pro Guide</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Ready to Master AI Avatars?</h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg">
              Get access to advanced techniques, celebrity integration, and professional fine-tuning strategies.
            </p>
            <a
              href="https://stan.store/heysirio/p/get-the-guide-now-t81peks7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors ring-1 ring-white/20 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GuideChoiceOptions;