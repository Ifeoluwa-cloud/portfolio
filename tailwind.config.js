/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: theme => ({
        '1': '1px',
        '2': '2px',
      }),
      textStrokeColor: theme => theme('colors'),
      screens: {
        'hgt-lg': { raw: '(min-height: 950px)' }, // custom screen height
      }
    },
  },
  plugins: [],
}