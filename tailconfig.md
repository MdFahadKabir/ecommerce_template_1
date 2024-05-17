/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#0069DB",
        primeFade: "#3C8DE6",
        secondary: "#C1DFFF",
        mobileNav: "#EDF5FF",
        secondaryLight: "#F3F9FF",
        deepBlue: "#333A73",
        cart: "#FBA834",
        cartBadge: "#EC8032",
        textDeep: "#495051",
        textDeepSemi: "#6E6E6E",
        textMedium: "#9F9F9F",
        extraLight: "#D9D9D9",
        lighter: "#E8E8E8",
        messengerBg: "#E8FFF7",
        violetLight: "#E5E3FF",
        pinkLight: "#FFE3E3",
      },
    },
  },
  plugins: [],
};
