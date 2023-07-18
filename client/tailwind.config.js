/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        fasthand: ["Fasthand-Regular"],
        lovedbytheking: ["LovedbytheKing-Regular"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

