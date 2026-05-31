import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  appType: 'spa',
  server: {
    port: 3002,
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
          'icons-vendor': ['lucide-react'],
          'gsap-vendor': ['gsap', 'gsap/ScrollTrigger'],
          'headlessui-vendor': ['@headlessui/react'],
        },
        format: 'es',
        sourcemap: false,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
      // Aggressive tree shaking — ignore side effects in packages
      // Pattern from SGS_WEB PR #2051
      // WARNING: All current deps (gsap, lucide-react, headlessui, react) self-declare
      // sideEffects: false or are explicitly imported. If adding a dep that relies on
      // side effects (CSS-in-JS, polyfills, Sentry), this may silently break it.
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      },
    },
    // Alinhado com tsconfig target ES2020
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    modulePreload: {
      polyfill: false,
    },
  },
  esbuild: {
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    drop: ['console', 'debugger'],
    pure: ['console.log', 'console.debug'],
  },
  publicDir: 'public',
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'gsap', 'gsap/ScrollTrigger'],
  },
})
