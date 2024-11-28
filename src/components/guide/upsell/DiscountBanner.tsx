import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Tag } from 'lucide-react';

const DiscountBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    endDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-red-600 text-white py-3 px-4 fixed top-16 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4" />
          <span className="font-bold">30% OFF</span>
          <span>with code</span>
          <code className="px-2 py-0.5 bg-white/20 rounded font-mono font-bold">FRI30</code>
        </div>

        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4" />
          <span>Offer ends in:</span>
          <div className="flex items-center gap-2 font-mono">
            <span className="font-bold">{timeLeft.days}d</span>
            <span>:</span>
            <span className="font-bold">{timeLeft.hours.toString().padStart(2, '0')}h</span>
            <span>:</span>
            <span className="font-bold">{timeLeft.minutes.toString().padStart(2, '0')}m</span>
            <span>:</span>
            <span className="font-bold">{timeLeft.seconds.toString().padStart(2, '0')}s</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscountBanner;