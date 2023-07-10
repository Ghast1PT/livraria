/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#93c5fd",
        'secundary': "#000000",
        'third': "#d33f49",
      }
    },
  },
  plugins: [],
}