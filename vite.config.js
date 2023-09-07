import { defineConfig } from 'vite'
import { join } from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    }
  },
  server: {
    proxy: {
      "/local": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/local/, ""),
      },
    },
    "/test": {
      target: "https://090aa9c4-95da-4434-badf-d5977ff162a6.mock.pstmn.io",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/test/, ""),
    },
    "/dev": {
      target: "https://901c-2001-da8-a800-afc0-959d-cf4f-dcb9-9fa2.ngrok-free.app",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/dev/, ""),
    }
  },
})
