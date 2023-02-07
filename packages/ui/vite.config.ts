import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'ui',
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          // Add external deps here
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [dts({ outputDir: 'dist/types', include: 'src/components/**' }), vue()],
});