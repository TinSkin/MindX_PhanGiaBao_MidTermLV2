/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'faded-primary': 'rgba(29, 29, 29, 0)',
        'faded-secondary': 'rgba(29, 29, 29, 0.8)',

        'card-faded-secondary': 'rgba(15, 30, 41, 1)',
      },
    },
  },
  plugins: [],
}

