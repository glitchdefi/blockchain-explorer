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

        // Base
        color1: "var(--color-1)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        color4: "var(--color-4)",
        color5: "var(--color-5)",
        color6: "var(--color-6)",
        color7: "var(--color-7)",
        color8: "var(--color-8)",

        success: "var(--color-success)",
        pending: "var(--color-pending)",
        fail: "var(--color-fail)",
        out: "var(--color-out)",
        in: "var(--color-in)",
        waiting: "var(--color-waiting)",
        info: "var(--color-info)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        text1: "var(--text1)",
        text2: "var(--text2)",
        text3: "var(--text3)",

        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bg1: "var(--bg-1)",
        bg2: "var(--bg-2)",
        bg3: "var(--bg-3)",
        bg4: "var(--bg-4)",
        bg5: "var(--bg-5)",
        bg6: "var(--bg-6)",
        bg7: "var(--bg-7)",
        bg8: "var(--bg-8)",
        bg9: "var(--bg-9)",
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
