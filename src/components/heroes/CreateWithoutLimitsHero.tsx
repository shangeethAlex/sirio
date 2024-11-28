import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Cpu } from 'lucide-react';

const CreateWithoutLimitsHero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-visible">
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 100% 0%, rgba(235,228,0,0.15) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 0% 100%, rgba(235,228,0,0.15) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle at 100% 0%, rgba(235,228,0,0.15) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 sm:-inset-3 blur-2xl bg-sirio-yellow/30" />
                <span className="relative text-white">Create Without</span>
              </span>
              <br />
              <span className="text-sirio-yellow">Limits</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Empowering creators with cutting-edge AI tools and innovative solutions
            </p>
            <button className="group px-8 py-3 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors flex items-center gap-2">
              Explore Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureCard
              icon={Sparkles}
              title="AI-Powered"
              description="Advanced artificial intelligence integration"
            />
            <FeatureCard
              icon={Globe}
              title="Global Reach"
              description="Connect with creators worldwide"
            />
            <FeatureCard
              icon={Cpu}
              title="Innovation"
              description="Cutting-edge creative solutions"
            />
            <FeatureCard
              icon={ArrowRight}
              title="Future Ready"
              description="Stay ahead of digital trends"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors"
  >
    <div className="w-12 h-12 rounded-lg bg-sirio-yellow/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-sirio-yellow" />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default CreateWithoutLimitsHero;