import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#66BB6A",
        "secondary": "#AED581",
        "accent": "#E6EE9C",
        "neutral": "#DCEDC8"
      }
    },
  },
  plugins: [
    daisyui
  ],
}

