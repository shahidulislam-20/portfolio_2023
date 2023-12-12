/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["black"],
  },
  theme: {
    extend: {
      colors: {
        "bg-prime": "#09101a",
        "text-prime": "#55e6a5",
        "hcolor": "#141c27"
      },
      fontFamily: {
        "roboto": "Roboto, sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

