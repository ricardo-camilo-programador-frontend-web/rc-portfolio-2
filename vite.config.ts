import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion-vendor': ['framer-motion'],
            'icons-vendor': ['lucide-react'],
          },
        },
      },
      target: 'esnext',
      minify: 'esbuild',
      sourcemap: false,
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
    },
    publicDir: 'public',
  };
});
