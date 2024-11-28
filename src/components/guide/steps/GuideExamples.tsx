import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, Lock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'cinematic', label: 'Cinematic' },
  { id: 'selfie', label: 'Selfie' },
  { id: 'creative', label: 'Creative' }
];

const examples = {
  cinematic: [
    {
      image: 'https://i.ibb.co/vjhm4kt/Screenshot-2024-11-27-at-9-18-26-AM.png',
      title: 'Cinematic Portrait',
      description: 'Professional lighting and composition'
    },
    {
      image: 'https://i.ibb.co/2KH1Km0/Screenshot-2024-11-27-at-9-18-29-AM.png',
      title: 'Studio Shot',
      description: 'High-end studio quality'
    },
    {
      image: 'https://i.ibb.co/hWjwZQW/Screenshot-2024-11-27-at-9-18-34-AM.png',
      title: 'Dramatic Lighting',
      description: 'Moody atmosphere'
    },
    {
      image: 'https://i.ibb.co/TYsr8GC/Screenshot-2024-11-27-at-9-18-37-AM.png',
      title: 'Professional Portrait',
      description: 'Clean and crisp look'
    },
    {
      image: 'https://i.ibb.co/pXx7fYd/Screenshot-2024-11-27-at-9-18-44-AM.png',
      title: 'Editorial Style',
      description: 'Magazine-worthy shot'
    }
  ],
  selfie: [
    {
      image: 'https://i.ibb.co/1dYZNXQ/c-Vr-Dun-BSb-CTRMGLLs9-B5-P-323cd530e1384444a1a9a66464dbe9f2.jpg',
      title: 'Natural Selfie',
      description: 'Authentic everyday look'
    },
    {
      image: 'https://i.ibb.co/t8BN7Hb/7u54y2e1f-Dqlu-Axrk-Y-o-E-b5621847e090426b88399f55797ff6a5.jpg',
      title: 'Casual Portrait',
      description: 'Relaxed and natural'
    },
    {
      image: 'https://i.ibb.co/mqGrgzc/emo-UZX0-Edi-R0-P-X8m-LRLa-ac5f53b26d354bc8ac0991d0c2b8cb0a.jpg',
      title: 'Lifestyle Shot',
      description: 'Everyday moments'
    },
    {
      image: 'https://i.ibb.co/28cdJ2t/E4-P984-Bd8-Wo-Px-KEu-F1-Dd5-23c98db0d06543e6af0020f03f0be057adsfad.png',
      title: 'Candid Moment',
      description: 'Natural expression'
    },
    {
      image: 'https://i.ibb.co/vVPMm87/3-SA6-CPV8l08-KRSlj-WXsyw-a5e8bb94cc4e4dd4a1e54e01ee38f321.jpg',
      title: 'Social Media Style',
      description: 'Instagram-ready'
    },
    {
      image: 'https://i.ibb.co/M1syzzp/YXHFsw3-Oo32uyv-L8-Ai-Uf-aba3035982634cf6ac7dba1051d7085c.jpg',
      title: 'Casual Look',
      description: 'Everyday style'
    },
    {
      image: 'https://i.ibb.co/wC42yRS/8-WWe-Yz-Qk0-EIm-QZPl-R8-H0r-3669c497a6de4dd3bcb6faacf61cad5e.jpg',
      title: 'Natural Light',
      description: 'Soft lighting'
    },
    {
      image: 'https://i.ibb.co/kGrjp6Y/q5-Clwg6-W70c-Tq-D0s-DKjp-K-6da334cd9ac249f2addffcb1b821c0aa.jpg',
      title: 'Portrait Mode',
      description: 'Phone camera style'
    }
  ],
  creative: [
    {
      image: 'https://i.ibb.co/Js737vD/Screenshot-2024-11-27-at-9-43-30-AM.png',
      title: 'Artistic Vision',
      description: 'Creative composition'
    },
    {
      image: 'https://i.ibb.co/4NTrycx/U-Hi-EHQs-FZVQba64alw-XR-365f4fa027844b30a54a41fcd7519c6f.jpg',
      title: 'Experimental Style',
      description: 'Unique perspective'
    },
    {
      image: 'https://i.ibb.co/pvjtLdY/Lahc-0-Hm-TNuzk-Pub0sphi-c9b95c8a9deb42608011c33cc0b06fb7.jpg',
      title: 'Creative Expression',
      description: 'Artistic interpretation'
    }
  ]
};

// Create the 'all' category by combining all examples
examples.all = [
  ...examples.cinematic,
  ...examples.selfie,
  ...examples.creative
];

const ImageContainer = ({ example, index }) => {
  const getObjectPosition = (imageUrl) => {
    const positionMap = {
      'https://i.ibb.co/hWjwZQW/Screenshot-2024-11-27-at-9-18-34-AM.png': 'object-[center_20%]',
      'https://i.ibb.co/TYsr8GC/Screenshot-2024-11-27-at-9-18-37-AM.png': 'object-[center_30%]',
      'https://i.ibb.co/28cdJ2t/E4-P984-Bd8-Wo-Px-KEu-F1-Dd5-23c98db0d06543e6af0020f03f0be057adsfad.png': 'object-[center_25%]',
      'https://i.ibb.co/vVPMm87/3-SA6-CPV8l08-KRSlj-WXsyw-a5e8bb94cc4e4dd4a1e54e01ee38f321.jpg': 'object-[center_15%]',
      'https://i.ibb.co/M1syzzp/YXHFsw3-Oo32uyv-L8-Ai-Uf-aba3035982634cf6ac7dba1051d7085c.jpg': 'object-[center_20%]'
    };
    return positionMap[imageUrl] || 'object-[center_25%]';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        className="relative rounded-xl overflow-hidden bg-gray-100"
        style={{ paddingBottom: '133.33%' }} // 3:4 aspect ratio
      >
        <img
          src={example.image}
          alt={example.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${getObjectPosition(example.image)}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-sirio-yellow/10 rounded-full p-2 mb-3">
              <Lock className="w-5 h-5 text-sirio-yellow" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-2">{example.title}</h3>
            <Link
              to="/guide/pro"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-sirio-yellow text-black rounded-full text-sm font-medium hover:bg-sirio-yellow/90 transition-colors group"
            >
              Unlock Full Guide
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GuideExamples = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="space-y-8">
      <div className="prose prose-lg mx-auto text-gray-600">
        <h2 className="text-2xl font-bold text-gray-900">Example Gallery</h2>
        <p>
          Here are some examples of what you can create with your AI avatar. These images showcase 
          different styles and possibilities.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category.id
                ? 'bg-sirio-blue text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            {activeCategory === category.id && <Star className="w-4 h-4" />}
            {category.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="wait">
          {examples[activeCategory].map((example, index) => (
            <ImageContainer key={example.image} example={example} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GuideExamples;