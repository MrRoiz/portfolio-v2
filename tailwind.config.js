/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#171716",
        secondary: "#2C394B",
        neutral: "#334756",
        accent: "#FF4C29"
      },
      fontFamily: {
        sans : ["Uroob"]
      }
    },
  },
  plugins: [],
}

