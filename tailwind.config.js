/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js',  "./node_modules/flowbite/**/*.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'bluee': '#42A5F5',
      },

    },
  },
  screens:{
    sm:"480px",
    md:"760px",
    lg:"1028px",
    xl:"1440px"
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
 
  ],
  
}
