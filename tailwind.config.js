/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'cormorant':['"Cormorant"','serif'],
      'work':['"Work Sans"', 'san-serif'],
      'Nunito':['"Nunito"', 'sans-serif'],
      'Dancing':['"Dancing Script"', 'cursive'],
      'Satisfy':['"Satisfy"', 'cursive']
    },
    colors: {
      'hero-bg':'#F6F7FC',
    },
    
  },
  plugins: [],
}

