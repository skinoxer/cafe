/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        dana: "dana",
        "dana-medium": "dana-medium",
        "dana-bold": "dana-bold",
        "morabba-light": "morabba-light",
        "morabba-medium": "morabba-medium",
        "morabba-bold": "morabba-bold",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
