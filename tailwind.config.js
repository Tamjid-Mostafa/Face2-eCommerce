/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DD9933',
        secondary: '#40DB6C',
        accent: '#47B5FF',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimGreen: 'rgb(66, 226, 111, 0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },

  plugins: [],
}
