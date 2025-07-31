/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        dark: {
          800: '#1a1a1a',
          900: '#121212',
        },
      },
    },
  },
  plugins: [],
}

