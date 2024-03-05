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
    },
  },
  plugins: [],
}

