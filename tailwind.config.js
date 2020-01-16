module.exports = {
  theme: {
    animations: {
      pulse: {
        from: {
          opacity: 0.3
        },
        to: {
          opacity: 1
        }
      }
    },
    extend: {}
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [
    require("tailwindcss-transitions")(),
    require("tailwindcss-animations")()
  ]
};
