/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './public/index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)',
        secondary: 'rgb(107 114 128)',
        success: 'rgb(34 197 94)',
        warning: 'rgb(234 179 8)',
        danger: 'rgb(239 68 68)'
      }
    }
  }
}
