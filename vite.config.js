import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages: change base to '/your-repo-name/' before deploy.
// For Vercel/Netlify or custom domain: keep it '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
