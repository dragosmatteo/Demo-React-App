/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      screens: {
         sm: "480px",
         md: "547px",
         lg: "800px",
         xl: "1024px",
         "2xl": "1500px",
      },
      extend: {
         colors: {
            primary: "#000392",
            blue: {
               450: "#5F99F7",
            },
         },
      },
      fontFamily: {
         sans: ["Poppins", "sans-serif"],
      },
   },
   plugins: [],
};
