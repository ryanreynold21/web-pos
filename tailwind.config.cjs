/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/assets/bg.png')",
      }
    },
  },
  plugins: [require("daisyui",'flowbite/plugin')],
  colors: {
    primary : '#B19777',
  }

};
