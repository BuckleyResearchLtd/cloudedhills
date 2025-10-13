// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import wikiLinkPlugin from "@portaljs/remark-wiki-link";
import remarkFigureCaption from '@microflash/remark-figure-caption';

// https://astro.build/config
export default defineConfig({
	site: 'https://cloudedhills.com',
	integrations: [sitemap(), mdx()],
  markdown: {
    remarkPlugins: [
      [wikiLinkPlugin, { 
        pathFormat: 'obsidian-absolute', 
        // generate url of the linked page.
        // here `slug` would be "Page Name" for wiki link [[Page Name]].
        wikiLinkResolver: (slug) => ["essays/" + slug] 
      }],
      remarkFigureCaption,
    ]
  },
});
