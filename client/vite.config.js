import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react-swc'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api' : `${process.env.VITE_API_URL ?? 'http://localhost:8000'}`,
    },
    },
    plugins: [react()],
});

