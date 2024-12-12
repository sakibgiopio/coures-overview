/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1216px',
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1.75rem',    
        sm: '2rem',           
        md: '2.5rem',          
        lg: '2.75rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      boxShadow: {
        'one': '0px 6px 7px 0px #1b5de052',   
        'two': '0px 4px 10px 0px #00000040',   
        'three': '0px 0px 10px 0px #00000040',   
        'four': '0px 4px 20px 0px #00000040',   
      }, 
      fontFamily: {    
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],     
        'inter': ['Inter', 'sans-serif'], 
      },
      backgroundColor: {
        'main': '#FEF9F5', 
        'deep': '#26404C', 
      },
      borderColor: {
        'first' : '#FF9040', 
      },
      colors: {
        'orange': '#FF9040',
        'sonali': '#F8AE4B',
        'deep': '#26404C',
      },
    },
  },
  plugins: [],
}

