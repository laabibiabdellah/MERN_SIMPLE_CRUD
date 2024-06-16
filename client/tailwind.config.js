/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    sm: "576px",
    // => @media (min-width: 576px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "992px",
    // => @media (min-width: 992px) { ... }

    xl: "1200px",
    // => @media (min-width: 1200px) { ... }

    "2xl": "1400px",
    // => @media (min-width: 1400px) { ... }
  },
  plugins: [],
};
