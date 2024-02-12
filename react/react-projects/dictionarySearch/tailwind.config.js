/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#A445ED",
        white: {
          100: "#ffffff",
          200: "#f5f5f5",
        },
        grey: {
          100: "#838383",
          200: "#757575",
          300: "#3b3b3b",
          400: "#1f1f1f",
        },
        black: {
          100: "#050505",
          200: "#000000",
        },
      },
    },
  },
  plugins: [],
};
