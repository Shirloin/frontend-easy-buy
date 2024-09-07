import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const wsTarget = process.env.VITE_SOCKET_URL;
export default defineConfig({
  base: "/",
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  preview: {
    port: 7654,
    strictPort: true,
  },
  server: {
    port: 7654,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:7654",
    proxy: {
      '/socket.io': {
        target: wsTarget,
        ws: true,
        changeOrigin: true,
      },
    },
  },
})
