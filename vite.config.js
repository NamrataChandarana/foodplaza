// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 1234,
    hmr: true,
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**', '**/large-media/**'],
    },
    fs: {
      strict: true, // Limit to the project directory
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias for cleaner imports
    },
  },
  // esbuild: {
  //   minify: true, // Enable minification during builds
  //   // target: 'esnext', // Specify modern JavaScript targets
  //   loader: 'jsx', // Use appropriate loader for TypeScript or JSX
  // },
});
