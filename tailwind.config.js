module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        20: "20px",
        tiny: "13px",
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
        "black-pearl": "var(--color-black-pearl)",
        "oxford-blue-2": "var(--color-oxford-blue-2)",
        "big-stone": "var(--color-big-stone)",
        success: "var(--color-success)",
        pending: "var(--color-pending)",
        info: "var(--color-info)",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
