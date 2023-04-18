/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        neutral: "#EEEEEE",
        accent: "#00ADB5"
      },
      fontFamily: {
        sans : ["Uroob"]
      }
    },
  },
  plugins: [],
}

