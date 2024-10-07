/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-pink': 'rgb(240, 162, 209)',
        'common-white': 'rgb(255, 255, 255)',
        'dark-gray-blue': 'rgb(40, 51, 65)',
        'dark-pink': 'rgb(206, 8, 100)',
        'dark-purple': 'rgb(75, 10, 130)',
        'light-blue': 'rgb(129, 146, 169)',
      },

    },
  },
  plugins: [],
}

