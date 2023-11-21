/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        'custom':'110px',
        'custom2':'202px'
      },
      screens:{
        'xxs':'450px',
        'xs':'500px',
        'xmd':'650px',
        'xlg':'800px'
      }
    },
  },
  plugins: [],
}

