/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecoration: ['hover', 'focus'], // Ensure this is available
    },
  },
  plugins: [],
}

