import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/llama-hack/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
