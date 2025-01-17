import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

import { resolve } from 'path'

const pathResolve = (dir) => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@md': pathResolve('src/assets/markdown')
    }
  },
  build: {
    outDir: "../",
  }
})
