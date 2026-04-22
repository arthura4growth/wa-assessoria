/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A2647",
          blue: "#4A90E2",
          white: "#FFFFFF",
          "blue-light": "#E8F1FB",
          "blue-border": "#D0E2F5",
          "navy-muted": "rgba(10, 38, 71, 0.7)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
