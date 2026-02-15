import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'VueStringDirectives',
      // the proper extensions will be added
      fileName: 'vue-string-directives',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [
    banner(
      `\n * Vue String Directives v${pkg.version}` +
      `\n * Homepage (${pkg.homepage})` +
      `\n * Copyright 2020-2026 ${pkg.author}` +
      `\n * License: ${pkg.license}\n`
    )
  ]
})