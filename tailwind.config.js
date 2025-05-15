/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8AFF84',  // Custom green color
        secondary: '#1B7BFF', // Custom blue color
      },
      fontFamily: {
        custom: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
