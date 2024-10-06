/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-pink': 'rgb(206, 8, 100)',
        'bubblegum-pink': 'rgb(240, 162, 209)',
        'light-blue': 'rgb(129, 146, 169)',
        'common-white': 'rgb(255, 255, 255)',
      },

    },
  },
  plugins: [],
}

