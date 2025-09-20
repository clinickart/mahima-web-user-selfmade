module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },

    },
    optimizeDeps: {
      include: ["chart.js"],
    },
  },
  plugins: [require("@iconify/tailwind4")],
};
