/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        hero: "calc(100vh - 72px)",
        "hero-sm": "calc(100vh - 48px)",
      },
    },
  },
  plugins: [],
};
