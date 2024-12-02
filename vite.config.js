// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 1234, // Change the default port if needed
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias for cleaner imports
    },
  },
});
