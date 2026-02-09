/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orea: {
          cream: '#F9F6F1',
          dark: '#4A3F35',
          champagne: '#D4C4A8',
          gold: '#C5B8A0',
          taupe: '#7D6B5C',
          linen: '#E8DFD3',
          earth: '#9B8877',
          oatmeal: '#D9CFC1',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
