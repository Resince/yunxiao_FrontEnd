import { calc } from 'antd/es/theme/internal';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#7948EA',
        'custom-orange': "#FD8D14",
        "custom-red": "#C51605"
      },
      height: {
        'container-height': 'calc(100vh - 80px)'
      }
    },
  },
  plugins: [],
}

