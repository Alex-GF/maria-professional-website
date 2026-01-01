import { theme } from './src/static/theme/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', "./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'fold': '300px',
    },
    extend: {
      fontFamily: {
        "custom": ["Arial Rounded MT Bold", "sans-serif"]
      },
      colors: {
        "primary": theme.colors.primary,
        "secondary": theme.colors.secondary,
        "body": theme.colors.body,
        "over": theme.colors.over,
        "background1": theme.colors.background1,
        "background2": theme.colors.background2,
        "iconsBackground": theme.colors.iconsBackground,
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
  darkMode: 'class',
}

