import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://automatiza.com.pa',
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: cloudflare()
});