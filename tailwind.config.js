/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard']
      },
      colors: {
        'navy': {
          800: '#003458',
        },
        'button-blue': '#0071BC',
      },
    },
  },
  plugins: [],
}