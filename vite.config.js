import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Base path - important for correct asset loading on Vercel
  base: '/',

  build: {
    outDir: 'dist',           // Default for Vite, but explicit is good
    sourcemap: false,         // Set to true only if you need debugging in production
    emptyOutDir: true,        // Clean dist folder before every build
    rollupOptions: {
      output: {
        manualChunks: undefined,   // Optional: keeps build simple
      }
    }
  }
})