// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-nine-chi-k994n9enp6.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});