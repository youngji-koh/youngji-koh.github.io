/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // font-sans 사용 시 Inter로 매핑
        sans: ['Inter', 'Noto Sans KR', 'ui-sans-serif', 'system-ui'],
        // font-serif: 사이드바 이름/직함 등 클래식한 포인트용
        serif: ['"Roboto Slab"', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
