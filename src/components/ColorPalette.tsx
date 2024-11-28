import React from 'react';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';

const colors = {
  primary: [
    { name: 'Yellow', hex: '#ebe400', className: 'bg-sirio-yellow' },
    { name: 'Blue', hex: '#043b5f', className: 'bg-sirio-blue' },
    { name: 'Dark Blue', hex: '#032845', className: 'bg-sirio-blue-dark' },
  ],
  grays: [
    { name: 'Black', hex: '#000000', className: 'bg-black' },
    { name: 'Dark 100', hex: '#0A0A0A', className: 'bg-dark-100' },
    { name: 'Dark 200', hex: '#121212', className: 'bg-dark-200' },
    { name: 'Dark 300', hex: '#1A1A1A', className: 'bg-dark-300' },
  ],
  accents: [
    { name: 'White', hex: '#FFFFFF', className: 'bg-white' },
    { name: 'Yellow 50', hex: '#ebe400', opacity: '0.5', className: 'bg-sirio-yellow/50' },
    { name: 'Blue 50', hex: '#043b5f', opacity: '0.5', className: 'bg-sirio-blue/50' },
  ]
};

const ColorPalette = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold mb-6">Primary Colors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {colors.primary.map((color) => (
            <ColorCard key={color.name} {...color} onCopy={copyToClipboard} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Grays</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {colors.grays.map((color) => (
            <ColorCard key={color.name} {...color} onCopy={copyToClipboard} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Accents</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {colors.accents.map((color) => (
            <ColorCard key={color.name} {...color} onCopy={copyToClipboard} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Gradients</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <GradientCard
            name="Primary Gradient"
            className="bg-gradient-to-r from-sirio-yellow to-sirio-blue"
            code="bg-gradient-to-r from-sirio-yellow to-sirio-blue"
          />
          <GradientCard
            name="Glow Gradient"
            className="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow"
            code="bg-gradient-to-r from-sirio-yellow via-white to-sirio-yellow"
          />
          <GradientCard
            name="Dark Gradient"
            className="bg-gradient-to-b from-black via-dark-200 to-sirio-blue-dark"
            code="bg-gradient-to-b from-black via-dark-200 to-sirio-blue-dark"
          />
          <GradientCard
            name="Radial Gradient"
            className="bg-[radial-gradient(circle_at_50%_50%,_rgba(235,228,0,0.15),transparent_50%)]"
            code="bg-[radial-gradient(circle_at_50%_50%,_rgba(235,228,0,0.15),transparent_50%)]"
          />
        </div>
      </div>
    </div>
  );
};

const ColorCard = ({ name, hex, className, opacity = '1', onCopy }: {
  name: string;
  hex: string;
  className: string;
  opacity?: string;
  onCopy: (text: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg"
  >
    <div className={`h-32 ${className}`} />
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">{hex}</p>
          {opacity !== '1' && (
            <p className="text-sm text-gray-400">Opacity: {opacity}</p>
          )}
        </div>
        <button
          onClick={() => onCopy(hex)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

const GradientCard = ({ name, className, code }: {
  name: string;
  className: string;
  code: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg"
  >
    <div className={`h-32 ${className}`} />
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">{code}</p>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default ColorPalette;