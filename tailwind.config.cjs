/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 22,
      lg: 24,
      xl: 28,
      '2xl': 36,
    },
    colors: {
      'transparent': 'transparent',

      'black': '#000',
      'white': '#fff',
      

      grey: {
        900: '#121214',
        800: '#202024', 
        400: '#7c7c8a', 
        200: '#c4c4cc', 
        100: '#e1e1e6', 
      },

      cyan: {
        500: '#81d8f7',
        300: '#abe4f8',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
