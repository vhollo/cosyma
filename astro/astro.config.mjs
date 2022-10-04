import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cosyma.hu/',
  integrations: [preact(), svelte()],
  adapter: netlify(),
  output: 'server',

  /*buildOptions: {
    sitemap: true,      // Generate sitemap (set to "false" to disable)
  },*/
});