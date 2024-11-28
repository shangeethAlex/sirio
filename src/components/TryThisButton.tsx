import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface TryThisButtonProps {
  onClick: () => void;
}

const TryThisButton = ({ onClick }: TryThisButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute -top-20 md:-top-20 left-1/2 -translate-x-1/2 whitespace-nowrap w-max"
    >
      {/* Outer Glow Ring */}
      <div className="absolute -inset-4 rounded-full bg-sirio-yellow/20 blur-3xl animate-pulse" />
      
      {/* Animated Container */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Sparkles Animation */}
        <div className="absolute -inset-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 1, 0],
                y: [-10, -20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-sirio-yellow" />
            </motion.div>
          ))}
        </div>

        {/* Main Button Container */}
        <motion.div
          className="relative px-8 py-4 md:px-6 md:py-3 rounded-full bg-black/90 backdrop-blur-xl border border-sirio-yellow text-sirio-yellow text-base md:text-base font-medium"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(235,228,0,0.3)",
              "0 0 40px rgba(235,228,0,0.5)",
              "0 0 20px rgba(235,228,0,0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* Gradient Background */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: 'linear-gradient(45deg, rgba(235,228,0,0.5), transparent 60%)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Animated Border */}
          <motion.div
            className="absolute -inset-[1px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, rgba(235,228,0,0.8), rgba(235,228,0,0.2), rgba(235,228,0,0.8))',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['200% 0', '0 0', '-200% 0'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center gap-2">
            <span>Try This</span>
            <motion.span
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              👋
            </motion.span>
          </div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['-200% 0', '200% 0'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TryThisButton;