import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
  },
  // PUBLIC_URL
  base: '/',
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
})
