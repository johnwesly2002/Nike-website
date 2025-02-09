/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media440: "440px",
        media560: "560px",
      },
      backgroundImage: {
        "testimonial-section": "url('/assets/test-bg.png')",
      },
    },
  },
  plugins: [],
};
