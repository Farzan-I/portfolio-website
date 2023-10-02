/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#cd5807",
        // #ff7400 - orange
        // #cd5807 - dark orange

        tertiary: "#082744",
        // #052a4c
        // #151030 - old tertiary

        "black-100": "#101437",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "yellow-text": "#eda53a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpeg')",
      },
    },
  },
  plugins: [],
};