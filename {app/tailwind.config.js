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
        primary:   '#1a1a1a',
        muted:     '#777777',
        border:    '#e5e5e5',
        light:     '#f6f6f4',
        dark:      '#111111',
        pvc:       '#4a7c59',
        aluminiu:  '#2d5a8e',
        accesorii: '#e8721c',
      },
      fontFamily: {
        sans:      ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
