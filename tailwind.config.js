/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        customColor: 'rgb(17, 18, 25)',
        dropColor:'rgb(39,41,51)',
         // bu yerda sizning maxsus rangingizni aniqlaymiz
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #3e3d3d, #111219)',
      },
      fontFamily: {
        lato: ['Lato', 'bold'],
      },
    },
  },
  plugins: [],
}

