/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {
          fontFamily: {
              poppins: ['Poppins', 'sans-serif'],
              raleway: ['Raleway', 'sans-serif'],
          },
          colors: {
              mainColor: '#420039',
              secondColor: '#932F6D',
              lightMain: '#932F6D',
              rbgSecond: 'rgb(236, 27, 48, 0.5)',
              rbgMain: 'rgba(20, 88, 135, 0.5)',
              customDark: 'rgba(6, 15, 21, 0.7)',
              customDarkRed: 'rgba(94, 22, 29, 0.5)',
              custumBlue: '#9883E5',
              highlight: '#52FFEE',
          },
      },
  },
  plugins: [],
};