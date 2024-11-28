import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCardHighlight } from '../hooks/useCardHighlight';
import TryThisButton from './TryThisButton';

const TOTAL_DURATION = 56;
const WAVEFORM_POINTS = 24;

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_DURATION);
  const [showThankYou, setShowThankYou] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number | null>(null);
  const { setIsAudioPlaying } = useCardHighlight();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (timerRef.current) return;

    if (pausedTimeRef.current !== null) {
      startTimeRef.current = Date.now() - (TOTAL_DURATION - pausedTimeRef.current) * 1000;
      pausedTimeRef.current = null;
    } else {
      startTimeRef.current = Date.now() - (TOTAL_DURATION - timeRemaining) * 1000;
    }
    
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - (startTimeRef.current || 0)) / 1000);
      const remaining = Math.max(0, TOTAL_DURATION - elapsed);
      
      setTimeRemaining(remaining);
      
      if (remaining <= 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 3000);
      }
    }, 1000);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      pausedTimeRef.current = timeRemaining;
    }
  };

  const startMusic = () => {
    if (!audioRef.current || isPlaying) return;
    
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
        setIsAudioPlaying(true);
        startTimer();
      })
      .catch((error) => {
        console.error('Playback failed:', error);
        setHasError(true);
      });
  };

  const togglePlay = () => {
    if (!audioRef.current || !hasInteracted) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsAudioPlaying(false);
      pauseTimer();
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setIsAudioPlaying(true);
      startTimer();
    }
  };

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2024/11/23/audio_cf0fe40d59.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    const handleError = () => {
      console.error('Audio loading failed');
      setHasError(true);
      setIsPlaying(false);
      setIsAudioPlaying(false);
    };

    audioRef.current.addEventListener('error', handleError);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current = null;
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setIsAudioPlaying(false);
    };
  }, []);

  const generateWaveform = () => {
    const points: { x: number; y: number }[] = [];
    const radius = 32;
    
    for (let i = 0; i < WAVEFORM_POINTS; i++) {
      const angle = (i / WAVEFORM_POINTS) * Math.PI * 2;
      points.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });
    }
    return points;
  };

  const waveformPoints = generateWaveform();

  if (hasError) return null;

  return (
    <AnimatePresence>
      {!hasInteracted ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={startMusic}
          className="fixed z-50 group bottom-8 right-8 md:right-32"
          aria-label="Start music"
        >
          <TryThisButton onClick={startMusic} />

          {/* Play Button */}
          <div className="relative">
            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute -inset-6 rounded-full bg-sirio-yellow/20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Button Surface */}
            <motion.div
              className="relative w-16 h-16 md:w-16 md:h-16 rounded-full bg-black/90 backdrop-blur-xl border border-sirio-yellow/50 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'linear-gradient(45deg, rgba(235,228,0,0.2), transparent, rgba(235,228,0,0.2))',
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

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Play className="w-6 h-6 md:w-6 md:h-6 text-sirio-yellow" />
              </motion.div>
            </motion.div>
          </div>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {showThankYou ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-sirio-yellow text-sirio-yellow font-medium"
            >
              Thank You!
            </motion.div>
          ) : (
            <button
              onClick={togglePlay}
              className="group"
              aria-label={isPlaying ? 'Mute music' : 'Play music'}
            >
              <div className="relative">
                {/* Waveform Visualization */}
                <svg
                  width="120"
                  height="120"
                  viewBox="-60 -60 120 120"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {waveformPoints.map((point, index) => (
                    <motion.circle
                      key={index}
                      cx={point.x}
                      cy={point.y}
                      r="1.5"
                      fill="white"
                      animate={isPlaying ? {
                        r: [1.5, 2.5, 1.5],
                        opacity: [0.3, 0.7, 0.3],
                      } : {
                        r: 1.5,
                        opacity: 0.3,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: (index / WAVEFORM_POINTS) * 2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </svg>

                {/* Timer Circle */}
                <div className="absolute -inset-1 rounded-full bg-black/80 backdrop-blur-xl border border-white/10" />
                <div className="relative flex items-center gap-2 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-white">
                    {formatTime(timeRemaining)}
                  </span>
                  {isPlaying ? (
                    <Volume2 className="w-5 h-5 text-white" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioPlayer;