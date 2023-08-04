module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Morai+One']
      }
    },
  },
  variants: {
    extend: {
      fontStyle:['italic'],
    },
  },
  plugins: [],
};
