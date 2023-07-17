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
        h1: "3rem;",
        h2: "2rem",
        h3: "1.5rem",
        h4: "1.2rem",
        h5: "1rem",
      },
      colors: {
        codeTagText: "#EB5757",
        codeTagBG: "rgba(135,131,120,0.15)",
        mainGreen: "rgb(74 222 128)",
      },
      boxShadow: {
        list: "3px 3px 10px #eee",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
