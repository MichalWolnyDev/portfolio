/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'image': '0px 0px 47px -12px rgba(102, 252, 241, 1)'
      },
      colors: {
        ui: {
          'darkgray': '#1f2833',
          'black': '#0b0c10',
          'gray': '#c5c6c7',
          'aqua': '#66fcf1',
          'darkaqua': '#45a29e',
          'darkblue': '#010822'
        },
        txt: {
          'gray': '#c5c6c7'
        }
      }
    },
  },
  plugins: [],
}
