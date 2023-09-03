import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API': JSON.stringify(process.env.VITE_API),
    'process.env.VITE_SERVER': JSON.stringify(process.env.VITE_SERVER),
    'process.env.VITE_TEMPLATE': JSON.stringify(process.env.VITE_TEMPLATE)
  }
})
