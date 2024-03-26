import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'

const pathResolve = (dir) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": pathResolve("./src"),
    },
  },
})
