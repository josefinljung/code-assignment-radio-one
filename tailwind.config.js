/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'common-white': 'var(--common-white)',
        'dark-blue': 'var(--dark-blue)',
        'dark-gray-blue': 'var(--dark-gray-blue)',
        'dark-pink': 'var(--dark-pink)',
        'dark-purple': 'var(--dark-purple)',
        'light-blue': 'var(--light-blue)',
        'light-pink': 'var(--light-pink)',
      },

    },
  },
  plugins: [],
}

