import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/rawg-api": {
        target: "https://api.rawg.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rawg-api/, "/api"),
      },
    },
  },
})
