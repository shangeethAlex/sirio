import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Users, User, BarChart2, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { getInstagramStats } from '../services/instagramService';

const StatCard = ({ label, value, icon: Icon, index, isLive = false }: { 
  label: string; 
  value: number;
  icon: any;
  index: number;
  isLive?: boolean;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCurrentValue(Math.min(value * easeOutQuart, value));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    if (num < 100) return `${num.toFixed(1)}%`;
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-xl group-hover:from-sirio-yellow/10 transition-colors duration-500" />
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-sirio-yellow" />
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sirio-yellow to-white bg-clip-text text-transparent mb-2">
              {inView ? formatNumber(currentValue) : "0"}
            </p>
            {isLive && (
              <div className="absolute -right-2 -top-2">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sirio-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sirio-yellow"></span>
                </span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 font-medium tracking-wider">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Analytics = () => {
  const [followers, setFollowers] = useState(34400);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = useCallback(async () => {
    try {
      setIsLoading(true);
      const stats = await getInstagramStats();
      if (stats.success) {
        setFollowers(stats.followers);
      }
    } catch (error) {
      console.error('Failed to fetch Instagram stats:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 300000); // Fetch every 5 minutes
    return () => clearInterval(interval);
  }, [fetchStats]);

  const stats = [
    { label: "FOLLOWERS", value: followers, icon: Users, isLive: true },
    { label: "MEN", value: 89, icon: User },
    { label: "ENGAGEMENT RATE", value: 12.9, icon: BarChart2 },
    { label: "MONTHLY REACH", value: 5000000, icon: Globe }
  ];

  return (
    <div className="relative mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-radial from-sirio-yellow/5 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4"
      >
        {stats.map((stat, index) => (
          <StatCard 
            key={stat.label} 
            {...stat} 
            index={index}
            value={isLoading && stat.isLive ? 0 : stat.value}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Analytics;