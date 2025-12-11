/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
      primary: '#FF2F92',
      accent: '#1B4FFF',
      textMain: '#1A1A1A',
      bgLight: '#FFF7FB',
    },
    },
  },
  plugins: [],
}

