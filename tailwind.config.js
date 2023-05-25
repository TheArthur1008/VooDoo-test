/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        bg: "#FCF7E6",
        orange: "#ED5E21",
        orangeHover: "#d84a0e",
      },
    },
  },
  plugins: [],
};
