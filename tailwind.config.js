/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export const content = ["./src/**/*.{html,js}"];
export const theme = {
  colors: {
    green: "#29c55c",
    greendark: "#1e5832",
    grey: "#5e6460",
    black: "#17202A",
  },
  fontFamily: {
    sans: ["sans-serif"],
    serif: ["serif"],
  },
  screens: {
    sm: "450px",
    // => @media (min-width: 500px) { ... }

    md: "750px",
    // => @media (min-width: 820px) { ... }
    xl: "1350px",
  },
  extend: {},
};
export const plugins = [
  plugin(function ({ addComponents }) {
    addComponents({
      ".btn": {
        padding: "1em 2em",
        borderRadius: "12px",
        border: "2px solid green",
      },
    });
  }),
];
