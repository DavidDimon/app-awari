import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@src': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  server: { port: 4000 },
})
