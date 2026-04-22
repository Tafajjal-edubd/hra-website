/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        teal: {
          DEFAULT: '#0d7377',
          dark: '#085c60',
          light: '#ceeaeb',
        },
        ink: '#0c1a2e',
        gold: '#c9a84c',
      },
    },
  },
  plugins: [],
}
