/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // font-sans 사용 시 Inter로 매핑
        sans: ['Inter', 'Noto Sans KR', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
