/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// eslint-disable-next-line
const {nextui} = require("@nextui-org/react");


export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};