/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-cus": "#CA2A2F",
        "yellow-cus": "#FDDD67",
        "dark-red": "#481813",
        "neutral-cus": "#808080",
      },
    },
  },
  plugins: [],
};
