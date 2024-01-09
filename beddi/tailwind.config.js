/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        trans: "rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        hero: "calc(100vh - 10rem)",
        "hero-sm": "calc(100vh - 8rem)",
      },
      gridTemplateColumns: {
        aside: "200px 1fr",
        "aside-sm": "100px 1fr",
      },
    },
  },
  plugins: [],
};
