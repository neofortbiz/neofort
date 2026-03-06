/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c1c1c',
        muted: '#6b6b6b',
        border: '#e5e5e5',
        light: '#f8f8f6',
        // Brand colors from logo
        pvc: '#4a7c59',       // verde PVC Salamander
        aluminiu: '#2d5a8e',  // albastru Aluminiu Alumil
        accesorii: '#e8721c', // portocaliu Accesorii
        accent: '#c8a96e',    // auriu neutru
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
