/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "200px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1025px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        serif: ["Bevan", "serif"],
      },
      colors: {
        primary: {
          light: "#99B080",
        },
        secondary: {
          light: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
