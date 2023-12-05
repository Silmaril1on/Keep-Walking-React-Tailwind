/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        11: "11",
      },
      height: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
      },
      fontFamily: {
        primary: "bebas neue",
        secondary: "noto serif jp",
      },
      colors: {
        transCream: "rgba(252, 245, 223, 0.922)",
        transBlack: "rgba(0, 0, 0, 0.473)",
        cream: "rgba(252,245,223,.95)",
        orange: "#fcb913",
        coffee: "#594c25",
        friarGray: "#7e7b71",
        chino: "#ccc3a6",
        buddhaGold: "#d99d00",
        emperor: "#535353",
        scienceBlue: "#0957c3",
        thunderbird: "#d91a17",
        crimson: "#e02a29",
        dustyGray: "#999",
        chocho: "#d6a461",
        green: "#3f5b52",
        blue: "#0f63af",
      },
    },
  },
  plugins: [],
};
