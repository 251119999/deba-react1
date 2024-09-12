/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       keyframes:{
         move:{
          '0%':{transform:'translateY(0px)',opacity:'0'},
          '25%':{transform:'translateY(100px)',opacity:'0.3'},
          '50%':{transform:'translateY(200px)',opacity:'0.5'},
          '75%':{transform:'translateY(300px)',opacity:'0.8'},
          '100%':{transform:'translateY(400px)',opacity:'1'}
         }
         
       },
       animation:{
          'move':'move 10s linear infinite'
       }
    },
  },
  plugins: [],
}

