/** @type {import('tailwindcss').Config} */
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'gray-100': {
        DEFAULT: '#1C1C26'
      },
      'gray-200': {
        DEFAULT: '#D2D2D4'
      },
      'gray-300': {
        DEFAULT: '#BBBBBE'
      },
      'gray-400': {
        DEFAULT: '#A4A4A8'
      },
      'gray-1000': {
        DEFAULT: '#1C1C26'
      },
      'primary-dark': {
        DEFAULT: '#FF6501'
      },
      'primary-light': {
        DEFAULT: '#FFE9D0'
      },
      white: '#fff',
      black: '#000'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [aspectRatioPlugin]
}
