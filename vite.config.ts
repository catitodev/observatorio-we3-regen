
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // O 'base' deve ser exatamente o nome do seu repositório entre barras
  base: '/observatorio-web3-regen/', 
  build: {
    outDir: 'dist',
  }
});
