/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sirio: {
          yellow: '#ebe400',
          blue: '#043b5f',
          'blue-dark': '#032845',
        },
        dark: {
          DEFAULT: '#000000',
          100: '#0A0A0A',
          200: '#121212',
          300: '#1A1A1A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
      },
    },
  },
  plugins: [],
};