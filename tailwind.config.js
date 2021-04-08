module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mono': ['PT Mono']
      },
      colors: {
        // new
        primary: 'var(--color-primary)', // new
        secondary: 'var(--color-secondary)', // new
        whiteAlt: 'var(--color-white-alt)', // new
    }, // new
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
