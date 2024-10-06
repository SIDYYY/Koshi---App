// tailwind.config.js

module.exports = {
  content: [],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5CB88F",
        white: "#F7F7F7",
        gray: "#9B9B9B",
        yellow: "",
        light_grey: "#E4E7EB",
        light_grey_border: "#EBECEE",
      },
    },
  },
  plugins: [],
};
