module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: "14px",
        base: "16px",
        lg: "18px",
      },
      fontFamily: {
        mono: ["PT Mono"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        whiteAlt: "var(--color-white-alt)",
        oxfordBlue: "var(--color-oxford-blue)",
        cobalt: "var(--color-cobalt)",
        nero: "var(--color-nero)",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
