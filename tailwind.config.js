/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#E5D5C0',
        'accent-dark': '#b8a082',
        bg: '#0A0A0A',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'Noto Sans JP', 'Noto Sans Arabic', 'Noto Sans Devanagari', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'subtle-float': 'subtle-float 8s ease-in-out infinite',
      },
      keyframes: {
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
