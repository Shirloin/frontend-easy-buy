import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // preview: {
  //   port: 7654,
  //   strictPort: true,
  // },
  // server: {
  //   port: 7654,
  //   strictPort: true,
  //   host: true,
  //   origin: "http://0.0.0.0:7654",
  // },
})
