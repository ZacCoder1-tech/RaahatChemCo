// Example with existing React plugin
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sitemap } from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(), 
    sitemap({
      hostname: 'https://raahat-chem-co-um6l.vercel.app/',
    })
  ],
  // Any other existing configurations
});