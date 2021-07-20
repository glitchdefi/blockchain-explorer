module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: "10px",
        sm: "12px",
        tiny: "13px",
        base: "14px",
        lg: "16px",
        xl: "18px",
      },
      fontFamily: {
        mono: ["PT Mono"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        pending: "var(--color-pending)",
        fail: "var(--color-fail)",

        // Base
        color1: "var(--color-1)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        color4: "var(--color-4)",
        color5: "var(--color-5)",
        color6: "var(--color-6)",
        color7: "var(--color-7)",
        color8: "var(--color-8)",
        color9: "var(--color-9)",
        color10: "var(--color-10)",
        color11: "var(--color-11)",
        color12: "var(--color-12)",
        color13: "var(--color-13)",
        color14: "var(--color-14)",
        color15: "var(--color-15)",
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
