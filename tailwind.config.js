/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "50px",
    },
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
