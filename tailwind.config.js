/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-line': 'hsl(215, 32%, 27%)',
        'soft-blue': 'hsl(215, 51%, 70%)',
        'cyan': 'hsl(178, 100%, 50%)',
      },
    },
  },
  plugins: [],
}
