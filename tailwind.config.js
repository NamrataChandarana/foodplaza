/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content:[
    "./src/**/*.{html,js,ts,jsx,tsx}",
    './index.html',
    './main.js',
    './app.js'],
  theme: {
    extend: {
      fontFamily:{
        Pacifico: ['"Pacifico"', ...defaultTheme.fontFamily.sans],
        Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        lightBlue: '#93959F',
        orange: '#FF5200',
        lightGray: '#7F8284',
        darkGray: '#161A1F',
        darkGray: '#3D4046',
        darkhead: "#414448",
        cartBgColor: "#E9ECEE",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(#1b1e2400 0%, #1b1e24d9 94.21%)',
      },
    },
  },
  plugins: [],
}

