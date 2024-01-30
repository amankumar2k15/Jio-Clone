/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#0f3cc9",
        "color-secondary": "#061951"
      }
    },
  },
  plugins: []
}

