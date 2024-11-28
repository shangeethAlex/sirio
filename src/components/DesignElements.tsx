import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Globe, Cpu } from 'lucide-react';

const DesignElements = () => {
  return (
    <div className="space-y-16">
      {/* Buttons */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors">
            Primary Button
          </button>
          <button className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
            Secondary Button
          </button>
          <button className="group px-8 py-3 bg-sirio-yellow text-black rounded-full font-medium hover:bg-sirio-yellow/90 transition-colors flex items-center gap-2">
            With Icon
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3 bg-white/5 backdrop-blur-xl text-white rounded-full font-medium hover:bg-white/10 transition-colors border border-white/10">
            Outlined Button
          </button>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Cards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Frosted Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-sirio-yellow/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-sirio-yellow" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Frosted Card</h3>
            <p className="text-gray-400">Simple frosted glass effect card</p>
          </motion.div>

          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="premium-card rounded-xl p-6 mx-4 sm:mx-0 max-w-[calc(100%-2rem)] sm:max-w-none"
          >
            <div className="gradient-bg" />
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-sirio-yellow" />
              </div>
              <h3 className="text-lg font-semibold text-sirio-yellow mb-2">Premium Card</h3>
              <p className="text-white/90">Card with gradient border and glow</p>
            </div>
          </motion.div>

          {/* Gradient Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-sirio-yellow/10 to-sirio-blue/10 backdrop-blur-lg rounded-xl p-6 hover:from-sirio-yellow/20 hover:to-sirio-blue/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Gradient Card</h3>
            <p className="text-gray-400">Card with gradient background</p>
          </motion.div>
        </div>
      </section>

      {/* Form Elements */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Form Elements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Text Input</label>
              <input
                type="text"
                placeholder="Enter text"
                className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sirio-yellow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Input</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sirio-yellow"
                />
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Textarea</label>
            <textarea
              placeholder="Enter message"
              rows={4}
              className="w-full bg-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sirio-yellow"
            />
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Interactive Elements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hover Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1633218388467-539651dcf81a?auto=format&fit=crop&q=80&w=800"
              alt="Digital Art"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Hover Card</h3>
                <p className="text-gray-300">Interactive hover effect</p>
              </div>
            </div>
          </motion.div>

          {/* Glow Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-black"
          >
            <div className="absolute inset-0 bg-gradient-conic from-sirio-yellow via-sirio-blue to-sirio-yellow rounded-full animate-spin-slow opacity-20 blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">Glow Effect</h3>
            </div>
          </motion.div>

          {/* Gradient Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-black flex items-center justify-center p-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow bg-clip-text text-transparent">
              Gradient Text
            </h3>
          </motion.div>

          {/* Animated Border Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="premium-card aspect-square rounded-2xl flex items-center justify-center mx-4 sm:mx-0 max-w-[calc(100%-2rem)] sm:max-w-none"
          >
            <div className="gradient-bg" />
            <h3 className="relative text-xl font-semibold text-sirio-yellow">Animated Border</h3>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DesignElements;