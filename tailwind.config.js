/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: {
          bg: "#0F1629",
          text: "#E5E7EB",
          icon: "#ff6b63",
          input: "#0F1629",
          border: "#283446",
        },
      },
    },
  },
  plugins: [],
};
