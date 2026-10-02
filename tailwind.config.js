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
        primary:   '#151515',
        muted:     '#1e1e1e',
        border:    '#e5e5e5',
        light:     '#f6f6f4',
        dark:      '#0e0e0e',
        pvc:       '#2b4834',
        aluminiu:  '#162d47',
        accesorii: '#934812',
      },
      fontFamily: {
        sans:      ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
