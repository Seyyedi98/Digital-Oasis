/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      // lg: "1024px",
      lg: "990px",
      xl: "1280px",
      // "2xl": "1536px",
      "2xl": "1400px",
    },
    colors: {
      "neutral-100": "#f2f2f2",
      "neutral-500": "#636363",
    },
    extend: {},
  },
  plugins: [],
};
