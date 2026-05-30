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
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy', 'classProperties'],
        },
      },
    }),
  ],
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
          'projects': ['./src/components/Projects'],
          'project-card': ['./src/components/ProjectCard'],
          'services': ['./src/components/Services'],
          'service-card': ['./src/components/ServiceCard'],
          'hero': ['./src/components/Hero'],
          'navigation': ['./src/components/Navigation'],
          'footer': ['./src/components/Footer'],
          'certificates': ['./src/components/Certificates'],
        },
        format: 'es',
        sourcemap: false,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
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
