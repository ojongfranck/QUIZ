/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007aff",
        // primary: "#0048f2",
        muted: {
          dark: "#a0a0a0",
          DEFAULT: "#a0a0a0",
        },
        success: "#21ac2a",
        danger: "#ef4444",
        background: "#ffffff",
      },
    },
  },
  plugins: [],
};
