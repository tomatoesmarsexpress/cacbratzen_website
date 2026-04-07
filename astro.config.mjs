import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Das neue Vite-Plugin

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});