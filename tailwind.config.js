/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '10rem', 
          lg: '10rem', 
          xl: '10rem',
        },
        screens: {
          sm: '640px', 
          md: '768px',   
          lg: '1024px',  
          xl: '1280px', 
          '2xl': '1536px',
        },
      },
      margin: {
        'container-x': '2rem',
      }
    },
  },
  plugins: [],
};
