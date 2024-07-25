import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react()
  ],
  base: './',
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'style.css';
          }
          return `[name].[hash][extname]`;
        }
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
});
