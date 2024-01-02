/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {
          fontFamily: {
              raleway: ['Raleway', 'sans-serif'],
              poppins: ['Poppins', 'sans-serif'],
          },
          colors: {
              mainColor: '#fb7206',
              secondColor: '#9f7aea',
              lightMain: '#fad5b9',
          },
      },
  },
  plugins: [],
};