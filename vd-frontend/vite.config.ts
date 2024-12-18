import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
    host: '0.0.0.0',

  },
});