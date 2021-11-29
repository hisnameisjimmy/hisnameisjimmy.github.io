module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './guides/**/*.{mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'Helvetica', 'Arial', 'sans-serif']
     },
      borderRadius: {
        xl: "2rem",
      },
      colors: {
        'dark-blue': '#335778',
        'burnt-orange': '#E7695E'
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#e7695e',
              '&:hover': {
                color: '#2c5282',
              },
            },
            selection: {
              background: '#000',
            }
          },
        },
      }
    },
  },
  variants: {
    extend: {},
    textColor: [
      'selection',
    ],
    backgroundColor: [
      'selection',
    ],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-selection-variant"),
  ],
}
