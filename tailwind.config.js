module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro', 'system-ui', 'sans']
    },
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#808080'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
