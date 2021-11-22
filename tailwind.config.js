const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html", "./src/**/*.jsx"],
  },
  darkMode: "media", // or 'media' or 'class'

  variants: {
    extend: {},
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    fontFamily: {
      poppins: ["poppins"],
    },
    extend: {
      colors: {
        orange: colors.orange,
      },
      padding: ["hover"],
    },
  },
};
