
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/observatorio-we3-regen/',  // ← Corrigido: we3 (não web3)
  build: {
    outDir: 'dist',
  }
});
