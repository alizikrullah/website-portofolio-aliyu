const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f242b",
        secondary: "#2ad882",
        lightGrey: "#9ca3af",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbiteReact
  ],
}