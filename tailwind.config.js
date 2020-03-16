module.exports = {
  theme: {
    extend: {
      colors: {
        "radical-red": "#f73859",
      },
      screens: {
        mobile: { max: "767px" },
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
