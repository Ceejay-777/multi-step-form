/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/*.html",
    "./src/*.js",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.html",
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purpleBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
      backgroundImage: {
        desktop: "url('/assets/images/bg-sidebar-desktop.svg')",
        mobile: "url('/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
