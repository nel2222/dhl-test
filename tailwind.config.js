/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#fc0",
        "color-red": "#d40511",
        "color-gray": "#f2f2f2",
      },
      fontFamily: {
        first: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
