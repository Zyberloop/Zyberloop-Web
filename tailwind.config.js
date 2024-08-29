/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient_start: "#13082A",
        gradient_end: "#7E7E7E",
        primary: "#13082A",
        button_base: "#7879F1",
        card_color: '#1C0E41',
        Card_Button: '#7879F1',
      },
      maxHeight: {
        max: "1728px",
      },
    },
  },
  plugins: [],
};
