module.exports = {
  theme: {
    extend: {
      colors: {
        "radical-red": "#f73859"
      },
      backgroundColor: {
        "whitesmoke": "whitesmoke"
      },
      screens: {
        mobile: { max: "767px" },
      },
      fontSize: {
        "xxs": ".65rem"
      },
      scale: {
        "101": "1.01",
      },
    },
    inset: {
      "16": "4rem",
      "20": "5rem",
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover"],
  },
  plugins: [],
}
