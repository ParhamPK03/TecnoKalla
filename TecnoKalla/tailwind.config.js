/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': '480px', // گوشی‌های کوچک
        'sm': '640px', // گوشی‌های متوسط
        'md': '768px', // تبلت‌ها
        'lg': '1024px', // لپ‌تاپ و دسکتاپ کوچک
        'xl': '1280px',
        'x2': '833px',
        'xlx': '1423px', // دسکتاپ بزرگ
        '2xl': '1536px', // دسکتاپ بسیار بزرگ
      },
    },
  },
  plugins: [],
}