// // @ts-check
// import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// import preact from '@astrojs/preact'; // <-- Add this

// // https://astro.build/config
// export default defineConfig({
//   site: 'https://example.com',
//   integrations: [mdx(), sitemap(), preact()], // <-- Include Preact here
// });
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), preact()],
});
