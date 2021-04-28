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
        primary: "rgba(36, 198, 201, 1)",
        secondary: "rgba(191, 40, 228, 1)",
        white: {
          DEFAULT: "rgba(255,255,255,1)",
          10: "rgba(255,255,255,0.1)",
          20: "rgba(255,255,255,0.2)",
          60: "rgba(255,255,255,0.6)",
          70: "rgba(255,255,255,0.7)",
        },
        success: "rgba(36, 198, 201, 1)",
        pending: "rgba(191, 40, 228, 1)",
        info: "rgba(0, 95, 169, 1)",
        cobalt: "rgba(0, 95, 169, 1)",
        nero: "rgba(19, 19, 19, 1)",
        "black-pearl": "rgba(28, 42, 47, 1)",
        "big-stone": "rgba(23, 61, 66, 1)",
        "outer-space": "rgba(47, 64, 67, 1)",
        "oxford-blue": {
          DEFAULT: "rgba(36, 50, 55, 1)",
          lighter: "rgba(38, 53, 58, 1)",
        },
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "1/3": "33.333333%",
        "3/4": "75%",
      },
      minWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "1/3": "33.333333%",
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
  plugins: [require("@tailwindcss/forms")],
};
