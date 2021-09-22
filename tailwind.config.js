module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#e02960",
      },
      animation: {
        shake: "shake 2s 1",
      },
      keyframes: {
        shake: {
          "20%": {
            transform: "rotate(2.333deg)",
          },
          "40%": {
            transform: "rotate(-2deg)",
          },
          "60%": {
            transform: "rotate(0.667deg)",
          },
          "80%": {
            transform: "rotate(-0.333deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
