import { create } from 'zustand';
import { soundManager } from '../utils/sound';

interface CardHighlightState {
  isAudioPlaying: boolean;
  activeCardIndex: number | null;
  highlightTimers: NodeJS.Timeout[];
  startTime: number | null;
  pausedTime: number | null;
  setIsAudioPlaying: (playing: boolean) => void;
  setActiveCardIndex: (index: number | null) => void;
}

export const useCardHighlight = create<CardHighlightState>((set, get) => ({
  isAudioPlaying: false,
  activeCardIndex: null,
  highlightTimers: [],
  startTime: null,
  pausedTime: null,

  setIsAudioPlaying: (playing) => {
    const state = get();
    
    // Clear any existing timers
    state.highlightTimers.forEach(timer => clearTimeout(timer));

    if (playing) {
      const now = Date.now();
      let elapsedTime = 0;

      // If resuming from pause, calculate elapsed time
      if (state.pausedTime !== null && state.startTime !== null) {
        elapsedTime = state.pausedTime;
      }

      // Update start time accounting for any previous elapsed time
      const newStartTime = now - elapsedTime;

      const scheduleHighlight = (index: number | null, timing: number) => {
        const adjustedTiming = Math.max(0, timing - elapsedTime);
        const timer = setTimeout(() => {
          set({ activeCardIndex: index });
          if (index !== null) {
            soundManager.playHighlight();
          }
        }, adjustedTiming);
        return timer;
      };

      // Schedule highlights based on the timeline
      const timers = [
        scheduleHighlight(0, 11000), // AI Studio at 0:11
        scheduleHighlight(1, 22000), // Discovery Call at 0:22
        scheduleHighlight(2, 35000), // Creative Code at 0:35
        scheduleHighlight(3, 51000), // Media Kit at 0:51
        scheduleHighlight(null, 56000), // Reset at the end
      ];

      set({
        isAudioPlaying: true,
        highlightTimers: timers,
        startTime: newStartTime,
        pausedTime: null,
      });
    } else {
      // When pausing, store the current elapsed time
      if (state.startTime !== null) {
        const elapsed = Date.now() - state.startTime;
        set({
          isAudioPlaying: false,
          highlightTimers: [],
          pausedTime: elapsed,
        });
      } else {
        set({
          isAudioPlaying: false,
          highlightTimers: [],
        });
      }
    }
  },

  setActiveCardIndex: (index) => set({ activeCardIndex: index }),
}));