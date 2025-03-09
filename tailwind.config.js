import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss,mdx}'],
  safelist: ['stroke-gray-400'],
  theme: {
    extend: {
      colors: {
        yellow: '#efc603',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '30%, 70%': { width: '100%' },
        },
        blink: {
          '0%': { opacity: 0 },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: { raw: 'only screen and (pointer: coarse)' },
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.stroke-gray-400': { stroke: '#9CA3AF' },
      }, ['responsive', 'hover'])
    }),
  ],
}
