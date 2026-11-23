import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const proxyConfig = {
  target: 'https://api.campusweb.in',
  changeOrigin: true,
  secure: true,
  headers: {
    'Origin': 'https://campusweb.in',
    'Referer': 'https://campusweb.in/',
    'X-Client': 'web',
    'X-Device-Platform': 'Windows',
    'X-Device-Name': 'Chrome',
    'X-Device-Model': 'Chrome 130.0.0.0',
    'X-App-Version': '2026.10.08-sessions.3'
  }
};

const noCacheHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0'
};

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    headers: noCacheHeaders,
    proxy: {
      '/api': proxyConfig
    }
  },
  preview: {
    port: 5173,
    host: true,
    headers: noCacheHeaders,
    proxy: {
      '/api': proxyConfig
    }
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('facultyDirectory')) {
            return 'faculty-directory';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide';
          }
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'node'
  }
});
