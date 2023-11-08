/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      minWidth: {
        table: "940px",
      },
    },
  },
  plugins: [],
};
