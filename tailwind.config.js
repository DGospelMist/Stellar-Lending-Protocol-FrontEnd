/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stellar: {
          blue: "#0B1E3D",
          purple: "#7B2FBE",
          teal: "#00B4D8",
        },
      },
    },
  },
  plugins: [],
};
