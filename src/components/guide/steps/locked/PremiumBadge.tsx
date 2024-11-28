import React from 'react';
import { Lock } from 'lucide-react';

interface PremiumBadgeProps {
  highlighted?: boolean;
}

const PremiumBadge = ({ highlighted = false }: PremiumBadgeProps) => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className={`
        absolute -inset-1 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${highlighted ? 'bg-sirio-yellow/50' : 'bg-sirio-yellow/30'}
      `} />
      
      {/* Badge */}
      <div className={`
        relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border shadow-lg shadow-black/20
        ${highlighted 
          ? 'bg-sirio-yellow text-black border-sirio-yellow' 
          : 'bg-black/90 text-sirio-yellow border-sirio-yellow/30'
        }
      `}>
        <Lock className="w-3.5 h-3.5" />
        <span className="tracking-wider">PRO</span>
      </div>
    </div>
  );
};

export default PremiumBadge;