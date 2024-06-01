/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['"Satoshi"', 'sans-serif'] 
      },
      colors: {
        'bg-main': {
          dark: '#060606',
          DEFAULT: '#060606',
          light: '#F0F0F0',
        },
        'bg-primary': {
          dark: '#111111',
          DEFAULT: '#111111',
          light: '#E5E5E5',
        },
        'bg-secondary': {
          dark: '#202020',
          DEFAULT: '#202020',
          light: '#D6D6D6',
        },
        
        'fg-primary': {
          dark: '#E0E0E0',
          DEFAULT: '#E0E0E0',
          light: '#1A1A1A',
        },
        'fg-secondary': {
          dark: '#898989',
          DEFAULT: '#898989',
          light: '#6E6E6E',
        },
        'fg-tertiary': {
          dark: '#323232',
          DEFAULT: '#323232',
          light: '#C2C2C2',
        },

        'spotify-accent': '#1ED760',
      },
    },
  },
  plugins: [],
}
