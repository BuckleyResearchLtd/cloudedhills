// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
const isProduction = process.env.NODE_ENV === 'production';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    '/random': '/',
  },

  adapter: isProduction ? cloudflare() : node({
    mode: 'standalone',
  }),
});