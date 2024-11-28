import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        guide: '/guide.html',
        freeguide: '/freeguide.html',
        mediakit: '/mediakit.html',
        explore: '/explore.html',
        guidePro: '/guide-upsell.html'
      }
    }
  }
})
