import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [srcDir],
      },
    },
  },

  resolve: {
    alias: {
      '@': srcDir,
    },
  },
});
