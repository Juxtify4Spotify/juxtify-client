/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['"Satoshi"', 'sans-serif'] 
      },
      colors: {
        'bg-primary': {
          dark: '#060606',
          DEFAULT: '#F0F0F0',
        },
        'bg-secondary': {
          dark: '#111111',
          DEFAULT: '#E5E5E5',
        },
        'bg-tertiary': {
          dark: '#202020',
          DEFAULT: '#D6D6D6',
        },
        
        'fg-primary': {
          dark: '#E0E0E0',
          DEFAULT: '#1A1A1A',
        },
        'fg-secondary': {
          dark: '#898989',
          DEFAULT: '#6E6E6E',
        },
        'fg-tertiary': {
          dark: '#323232',
          DEFAULT: '#C2C2C2',
        },

        'spotify-accent': '#1ED760',
      },
    },
  },
  plugins: [],
}
