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
          primary: '#1a2b5b',
          primaryDark: '#132046',
          accent: '#ffe000',
          accentDark: '#e6cc00',
          light: '#f4f6fb',
          secondary: '#007bff',
        },
      },
    },
  },
  plugins: [],
}