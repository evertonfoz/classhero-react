import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  server: {
    host: true,
    watch: {
      usePolling: true,     // <- ESSENCIAL para containers
    },
  },
};

