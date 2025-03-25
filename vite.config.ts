import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: ['.diploi.app'],
    // @ts-ignore
    port: process.env.PORT,
  },
});
