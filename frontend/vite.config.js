import { defineConfig } from 'vite'

// Project is published to GitHub Pages at https://tokslaw7.github.io/ViteProject-demo/
// so the production build needs that repo path as its base. Dev/test stay at '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ViteProject-demo/' : '/',
  test: {
    environment: 'jsdom',
  },
}))
