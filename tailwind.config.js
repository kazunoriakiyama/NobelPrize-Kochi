/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#e04c3c",
        "secondary": "#2563eb",
        "background-light": "#fcfbfa",
        "background-dark": "#1a1a1a",
      },
      fontFamily: {
        "display": ["'BIZ UDGothic'", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
