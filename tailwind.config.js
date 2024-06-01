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
        'bg-dark-main': '#060606',
        'bg-dark-primary': '#111111',
        'bg-dark-secondary': '#202020',

        'bg-light': '#F0F0F0',

        'fg-dark-primary': '#E0E0E0',
        'fg-dark-secondary': '#898989',
        'fg-dark-tertiary': '#323232',

        'fg-light-primary': '#1A1A1A',
        'fg-light-secondary': '#6E6E6E',

        'spotify-accent': '#1ED760',
      },
    },
  },
  plugins: [],
}
