/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add the Google Font here
      },
      backgroundImage: {
        'banner-img': "url('/src/assets/banner.png')",
        'programSection-wave-img': "url('/src/assets/progamWave.png')",
        'footer-wave-img': "url('/src/assets/footerWave.png')",
      },
      colors:{
        primary:{
          'green':'#1D8C6E',
          'greenish':'#296548',
          'lightgreen':'#75b9a7',
          'gray':'#e2e2e2'
        },
        secondary:{
          'green':'#75b9a7',
          'lightgreen':'#00ffb6',
        },
        default:{
          black:'#000000',
          gray:'#EDEDED'
        }
      }
    },
  },
  plugins: [],
}

