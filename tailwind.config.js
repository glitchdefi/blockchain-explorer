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
        // primary: "rgba(36, 198, 201, 1)",
        // secondary: "rgba(191, 40, 228, 1)",
        // white: {
        //   DEFAULT: "rgba(255,255,255,1)",
        //   10: "rgba(255,255,255,0.1)",
        //   20: "rgba(255,255,255,0.2)",
        //   60: "rgba(255,255,255,0.6)",
        //   70: "rgba(255,255,255,0.7)",
        // },
        // success: "rgba(36, 198, 201, 1)",
        // pending: "rgba(191, 40, 228, 1)",
        // info: "rgba(0, 95, 169, 1)",
        // cobalt: "rgba(0, 95, 169, 1)",
        // nero: "rgba(19, 19, 19, 1)",
        // "black-pearl": "rgba(28, 42, 47, 1)",
        // "big-stone": "rgba(23, 61, 66, 1)",
        // "outer-space": "rgba(47, 64, 67, 1)",
        // "outer-space-2": "rgba(52, 63, 68, 1)",
        // "oxford-blue": {
        //   DEFAULT: "rgba(36, 50, 55, 1)",
        //   lighter: "rgba(38, 53, 58, 1)",
        // },

        // New Configs
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

        success: "var(--color-success)",
        pending: "var(--color-pending)",
        waiting: "var(--color-waiting)",
        info: "var(--color-info)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        text1: "var(--text1)",

        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bg1: "var(--bg-1)",
        bg2: "var(--bg-2)",
        bg3: "var(--bg-3)",
        bg4: "var(--bg-4)",
        bg5: "var(--bg-5)",
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
