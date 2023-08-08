/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FFBE33",
        secondary:"#222831"
      },
      fontFamily:{
        dancing:["Dancing Script","cursive"],
        sans:["Open Sans","san-serif"],
      }
    },
  },
  plugins: [],
}