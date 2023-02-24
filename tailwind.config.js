/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {colors: {
      'green': '#719743',},}
  },
  plugins: [require('flowbite/plugin')],
}
