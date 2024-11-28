import { Howl } from 'howler';

class SoundManager {
  private static instance: SoundManager;
  private sounds: { [key: string]: Howl } = {};

  private constructor() {
    // Initialize with a more subtle, Apple-style notification sound
    this.sounds = {
      highlight: new Howl({
        src: ['https://cdn.pixabay.com/audio/2024/11/23/audio_9fccaaa8d8.mp3'],
        volume: 0.1,
        preload: true,
        html5: true,
      }),
    };
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public playHighlight() {
    // Stop any currently playing instance before playing again
    this.sounds.highlight.stop();
    this.sounds.highlight.play();
  }
}

export const soundManager = SoundManager.getInstance();