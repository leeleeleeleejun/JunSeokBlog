/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: "2em",
        h2: "1.5em",
        h3: "1.17em",
        h4: "1em",
        h5: "8.83em",
      },
      colors: {
        codeTagText: "#EB5757",
        codeTagBG: "rgba(135,131,120,0.15)",
        mainGreen: "rgb(74 222 128)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
