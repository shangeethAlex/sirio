import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroExamples from '../components/HeroExamples';
import ColorPalette from '../components/ColorPalette';
import DesignElements from '../components/DesignElements';

const BrandingPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-1.5 sm:gap-2 text-sirio-yellow hover:text-sirio-yellow/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 px-2">
              <span className="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow bg-clip-text text-transparent">
                Brand Guidelines
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-2">
              A comprehensive guide to Sirio's visual identity and design system
            </p>
          </motion.div>

          {/* Colors Section */}
          <section id="colors" className="mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Colors</h2>
              <p className="text-gray-400">Our color palette reflects innovation and creativity</p>
            </motion.div>
            <ColorPalette />
          </section>

          {/* Typography Section */}
          <section id="typography" className="mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Typography</h2>
              <p className="text-gray-400">Our type system is designed for clarity and impact</p>
            </motion.div>

            <div className="space-y-8 sm:space-y-12">
              {/* Hero Examples */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Hero Examples</h3>
                <HeroExamples />
              </div>

              {/* Type Scale */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Type Scale</h3>
                <div className="space-y-6 sm:space-y-8 overflow-x-hidden">
                  <TypeExample
                    size="text-6xl sm:text-8xl"
                    weight="font-bold"
                    label="Display"
                    text="Vision Reimagined"
                  />
                  <TypeExample
                    size="text-5xl sm:text-6xl"
                    weight="font-bold"
                    label="H1"
                    text="Create Without Limits"
                  />
                  <TypeExample
                    size="text-4xl sm:text-5xl"
                    weight="font-bold"
                    label="H2"
                    text="Digital Innovation"
                  />
                  <TypeExample
                    size="text-3xl sm:text-4xl"
                    weight="font-semibold"
                    label="H3"
                    text="AI-Powered Solutions"
                  />
                  <TypeExample
                    size="text-xl sm:text-2xl"
                    weight="font-medium"
                    label="H4"
                    text="Creative Technology"
                  />
                  <TypeExample
                    size="text-lg sm:text-xl"
                    weight="normal"
                    label="Large Text"
                    text="Empowering creators worldwide"
                  />
                  <TypeExample
                    size="text-base"
                    weight="normal"
                    label="Body"
                    text="Where AI innovation meets artistic vision"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Design Elements Section */}
          <section id="design-elements" className="mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Design Elements</h2>
              <p className="text-gray-400">Core components and interactive elements</p>
            </motion.div>
            <DesignElements />
          </section>

          {/* Layout & Grid Section */}
          <section id="layout" className="mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Layout System</h2>
              <p className="text-gray-400">Grid system and spacing guidelines</p>
            </motion.div>

            <div className="grid grid-cols-4 sm:grid-cols-12 gap-2 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="h-12 sm:h-16 bg-sirio-yellow/10 rounded-lg flex items-center justify-center text-sirio-yellow text-xs sm:text-sm"
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-20 sm:h-24 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  Column {i + 1}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const TypeExample = ({ size, weight, label, text }: { 
  size: string; 
  weight: string; 
  label: string; 
  text: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="group relative pl-0 sm:pl-24"
  >
    <div className="hidden sm:block absolute -left-24 top-1/2 -translate-y-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </div>
    <div className="block sm:hidden text-sm text-gray-500 mb-1">
      {label}
    </div>
    <p className={`${size} ${weight} bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent`}>
      {text}
    </p>
  </motion.div>
);

export default BrandingPage;