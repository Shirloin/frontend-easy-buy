import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'left': '-5px 0 5px -5px rgba(0, 0, 0, 0.1)',
        'right': '5px 0 5px -5px rgba(0, 0, 0, 0.1)',
        'top': '0 -5px 5px -5px rgba(0, 0, 0, 0.1)',
        'bottom': '0 5px 5px -5px rgba(0, 0, 0, 0.1)',
        'all-sides': `
          -5px 0 5px -5px rgba(0, 0, 0, 0.15), 
          5px 0 5px -5px rgba(0, 0, 0, 0.15), 
          0 -5px 5px -5px rgba(0, 0, 0, 0.15), 
          0 5px 5px -5px rgba(0, 0, 0, 0.15)
        `,
      },
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

