import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  PlayCircle, 
  FileStack,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Youtube,
  Instagram
} from 'lucide-react';
import SirioLogo from '../components/SirioLogo';
import NewsletterIcon from '../components/NewsletterIcon';
import AudioPlayer from '../components/AudioPlayer';
import { useCardHighlight } from '../hooks/useCardHighlight';

const LandingPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isEnterHovered, setIsEnterHovered] = useState(false);
  const { activeCardIndex } = useCardHighlight();

  const links = [
    {
      title: 'AI Studio',
      description: 'Premium and FREE AI resources',
      icon: Cpu,
      url: 'https://stan.store/heysirio',
      isFeature: true,
    },
    {
      title: 'Discovery Call',
      description: 'Tap to discover possibilities together!',
      icon: PlayCircle,
      url: 'https://stan.store/heysirio/p/discovery-call-with-sirio',
    },
    {
      title: '/the Creative Code',
      description: 'A weekly newsletter with insights on AI and creativity',
      icon: NewsletterIcon,
      url: 'https://sirio.visionreimagine.com/',
    },
    {
      title: 'AI Media Kit',
      description: 'View my press & media resources',
      icon: FileStack,
      url: '/mediakit',
      isInternal: true,
    },
  ];

  return (
    <div className="h-[100dvh] bg-dark text-white overflow-hidden">
      <AudioPlayer />
      <div className="h-full relative flex items-center justify-center">
        {/* Ambient Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom, #000000 0%, #000000 80%, #0a4b7a 100%)'
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(235,228,0,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[calc(100%-2rem)] sm:max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-4 sm:mb-6"
          >
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto mb-3 sm:mb-4"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sirio-yellow/5 to-sirio-blue/5 blur-xl animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/10">
                  <img
                    src="https://i.ibb.co/6v8BcSF/Sirio.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex items-center justify-center gap-3">
                <motion.a
                  href="mailto:sirio@visionreimagine.com"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                </motion.a>

                <SirioLogo />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <a
                    href="https://www.youtube.com/@sirioberati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                  </a>
                  <a
                    href="https://instagram.com/heysirio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                  </a>
                </motion.div>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-sm sm:text-lg text-zinc-500"
              >
                I believe AI empowers creators
              </motion.p>
              <Link
                to="/brand"
                className="inline-block"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-sirio-yellow text-sm sm:text-base font-medium hover:text-sirio-yellow/80 transition-colors"
                >
                  #createwithoutlimits
                </motion.p>
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            {/* Single radial gradient positioned to cover first 3 cards */}
            <div className="absolute -top-4 -inset-x-8 h-[300px] bg-[radial-gradient(circle_at_50%_50%,_rgba(235,228,0,0.25),transparent_70%)] blur-[18px]" />
            
            {/* Cards grid */}
            <div className="relative grid gap-2 sm:gap-4">
              {links.map((link, index) => (
                <LinkCard 
                  key={index}
                  link={link} 
                  index={index}
                  isHovered={hoveredCard === index}
                  isHighlighted={activeCardIndex === index}
                  onHover={() => setHoveredCard(index)}
                  onLeave={() => setHoveredCard(null)}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: links.length * 0.1 }}
              className="text-center mt-6"
            >
              <Link 
                to="/explore" 
                className="inline-flex items-center gap-2 text-white hover:text-sirio-blue transition-colors"
                onMouseEnter={() => setIsEnterHovered(true)}
                onMouseLeave={() => setIsEnterHovered(false)}
              >
                <span className="text-lg">Explore More</span>
                <motion.div
                  animate={{
                    x: isEnterHovered ? 5 : 0,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkCard = ({ 
  link, 
  index, 
  isHovered,
  isHighlighted,
  onHover,
  onLeave
}: { 
  link: any; 
  index: number;
  isHovered: boolean;
  isHighlighted: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const Icon = link.icon;
  const CardWrapper = link.isInternal ? Link : 'a';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <CardWrapper
        to={link.isInternal ? link.url : undefined}
        href={!link.isInternal ? link.url : undefined}
        target={!link.isInternal ? "_blank" : undefined}
        rel={!link.isInternal ? "noopener noreferrer" : undefined}
        className={`
          block w-full rounded-xl overflow-hidden relative
          ${link.isFeature ? 'premium-card mb-4 sm:mb-6' : 'mb-1.5 sm:mb-2 scale-[1.02] sm:scale-100'}
          ${isHighlighted ? 'ring-2 ring-sirio-yellow ring-offset-2 ring-offset-black transform scale-105 transition-all duration-500' : ''}
        `}
      >
        <div className={`
          relative rounded-xl overflow-hidden backdrop-blur-lg
          ${!link.isFeature && 'bg-white/5 hover:bg-white/10'}
          transition-all duration-300
        `}>
          {link.isFeature && <div className="gradient-bg" />}
          <div className={`
            card-content relative
            ${link.isFeature ? 'p-5 sm:p-6' : 'py-5 px-3.5 sm:p-4'}
          `}>
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`
                  rounded-lg flex items-center justify-center
                  ${link.isFeature ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-11 h-11 sm:w-12 sm:h-12'}
                  ${link.isFeature ? 'bg-white/10' : 'bg-white/5'}
                  ${isHighlighted ? 'bg-sirio-yellow/20' : ''}
                `}>
                  <Icon className={`
                    ${link.isFeature ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-5 h-5 sm:w-6 sm:h-6'}
                    ${link.isFeature ? 'text-sirio-yellow' : 'text-white'}
                    ${isHighlighted ? 'text-sirio-yellow' : ''}
                  `} />
                </div>
                <div>
                  <h3 className={`
                    font-semibold
                    ${link.isFeature ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}
                    ${link.isFeature ? 'text-sirio-yellow' : 'text-white'}
                    ${isHighlighted ? 'text-sirio-yellow' : ''}
                  `}>{link.title}</h3>
                  <p className={`
                    ${link.isFeature ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}
                    ${link.isFeature ? 'text-white/90' : 'text-zinc-400'}
                    ${isHighlighted ? 'text-white' : ''}
                  `}>{link.description}</p>
                </div>
              </div>
              <ArrowUpRight className={`
                ${link.isFeature ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4 sm:w-5 sm:h-5'}
                ${link.isFeature ? 'text-sirio-yellow' : 'text-zinc-400'}
                ${isHighlighted ? 'text-sirio-yellow' : ''}
                transition-transform duration-300
                ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''}
              `} />
            </div>
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
};

export default LandingPage;