import { defineConfig } from 'vite'

export default defineConfig({
  root: './src/view',
  base: './',
  build: {
    outDir: '../../dist/view',
    emptyOutDir: true,
  },
})
