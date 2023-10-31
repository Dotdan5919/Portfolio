/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'btn-blue': '#0D062D',
        'hover-blue': '#3ABCD7',
        'background': '#0F192D',
      },
      screens: {
        tablet: '689px',
      },
    },
  },
  plugins: [],
};
