/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarBg: '#00001b', // Add your custom color

          topColor: 'rgb(21,17,29)',
          middleColor: 'rgb(27,24,40)',
          bottomColor: 'rgb(41, 42, 68)',
    
      },
      zIndex: {
        100: '100',
        200: '200',
      },
      fontFamily: {
        sofia: ['"Sofia Pro"', 'sans-serif'],
        harry: ['"Harry Beast Regular"', 'serif'],
        runes: ['"Legendary Runes"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

