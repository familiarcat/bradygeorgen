/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['stroke-gray-400'],
  theme: { extend: {} },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({ '.stroke-gray-400': { stroke: '#9CA3AF' } }, ['responsive', 'hover'])
    })
  ],
}
