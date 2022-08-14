//import netlify from '@astrojs/netlify/functions';


// @ts-check
import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact';

export default defineConfig({
  //   adapter: netlify(),
  output: 'static',

  /*buildOptions: {
    sitemap: true,      // Generate sitemap (set to "false" to disable)
  },*/
  site: 'https://cosyma.hu/',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  integrations: [
    preact(),
  ],
});