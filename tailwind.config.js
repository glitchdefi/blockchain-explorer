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
        oxfordBlue60: "var(--color-oxford-blue-opacity-60)",
        cobalt: "var(--color-cobalt)",
        nero: "var(--color-nero)",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
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
