/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107",
        secondary: "#ff18b8",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      backgroundClip: {
        text: "text", // Pastikan Tailwind mengenali `bg-clip-text`
      },
    },
  },
  plugins: [],
};
