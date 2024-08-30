/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(to left, rgba(126, 126, 126, 0.3) 32%, rgba(19, 8, 42, 0.3) 68%)",
      },
      colors: {
        gradient_start: "#13082A",
        gradient_end: "#7E7E7E",
        primary: "#13082A",
        button_base: "#7879F1",
        card_color: '#1C0E41',
        Card_Button: '#7879F1',
      },
      maxWidth: {
        max: "1728px",
      },
      fontFamily: {
        LexendDecaRegular: ["LexendDeca-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
