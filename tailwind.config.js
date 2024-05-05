/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B043A",
        secondary: "#1B1448",
        content: "#874AF0",
        bluepurple: "#230873",
      },
      fontFamily: {
        mono: ["'Chivo Mono'", "serif"],
        roboto: ["'Roboto'", "sans - serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
