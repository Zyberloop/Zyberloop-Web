/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(to left, rgba(126, 126, 126, 0.3) 32%, rgba(19, 8, 42, 0.3) 68%)",
      },
      perspective: {
        1000: "1000px",
      },
      colors: {
        gradient_start: "#13082A",
        gradient_end: "#7E7E7E",
        primary: "#13082A",
        button_base: "#7879F1",
        card_color: "#1C0E41",
        Card_Button: "#7879F1",
      },
      maxWidth: {
        max: "1728px",
      },
      fontFamily: {
        LexendDecaRegular: ["LexendDeca-Regular", "sans-serif"],
        LexendDecaBold: ["LexendDeca-Boldr", "sans-serif"],
        LexendDecaExtraBold: ["LexendDeca-ExtraBold", "sans-serif"],
        LexendDecaExtraLight: ["LexendDeca-ExtraLight", "sans-serif"],
        LexendDecaLigh: ["LexendDeca-Ligh", "sans-serif"],
        LexendDecaSemiBold: ["LexendDeca-SemiBold", "sans-serif"],
        LexendDecaThin: ["LexendDeca-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
