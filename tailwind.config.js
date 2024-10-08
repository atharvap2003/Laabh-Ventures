/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"], // Add Open Sans
        play: ["Playfair Display", "sans-serif"],
      },
      colors: {
        'custom-rgba': 'rgb(242, 242, 242, 0.8)', // Add your custom RGBA color
      },
    },
  },
  plugins: [],
};
