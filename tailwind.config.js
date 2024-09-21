/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#F5F5DC',
      text: '#3E2723',
      cta: '#6B8E23',
      hover: '#7da531',
      beige: '#D8CAB8',
    },
    extend: {
      height: {
        'mobile-menu': 'calc(100vh - 64px)',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
