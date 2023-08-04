/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerdark: "#222",
        back: "#131313",
        shade: "#2e333d",
        messageBlue: "#6bbafd",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
