import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        explore: './public/explore.html',
        brand: './public/brand.html',
        freeguide: './public/freeguide.html',
        guideupsell: './public/guide-upsell.html',
        mediakit: './public/mediakit.html'
      },
    },
  },
});