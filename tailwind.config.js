/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "secondary-light": "#2548e3",
      "secondary-text-light": "#494f50",
      "tertiary-light": "#151030",

      "secondary-dark": "#aaa6c3",
      "tertiary-dark": "#151030",
      
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      // JPEG instead of the 2.4MB PNG. The PNG's alpha channel was fully
      // opaque, so this is pixel identical at a sixth of the weight.
      "hero-pattern-dark": "url('/src/assets/herobgdark.jpg')",
      "hero-pattern-light": "url('/src/assets/herobglight.jpg')",
    },
  },
};
export const plugins = [];