/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        'sm': '830px',
        'md': '1280px',
       
      },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }, 'slide-in-up': {
        '0%': { transform: 'translateY(50%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      'slide-in-left': {
        '0%': { transform: 'translateX(-50%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      'slide-in-right': {
        '0%': { transform: 'translateX(50%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'zoom-in': {
        '0%': { transform: 'scale(0.9)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
      'marquee': 'marquee 20s linear infinite',
   'animate-slide-in-up': 'slide-in-up 0.8s ease-out forwards',
  'animate-slide-in-left': 'slide-in-left 0.8s ease-out forwards',
  'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
  'fade-in': 'fade-in 0.8s ease-out forwards',
  'zoom-in': 'zoom-in 0.8s ease-out forwards',
  'spin-slow': 'spin 3s linear infinite',
    }
  },
},
  plugins: [],
}

