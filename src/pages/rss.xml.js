import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
  const essays = await getCollection('essays');
  const musings = await getCollection('musings');
  const notes = await getCollection('notes');

  const essayItems = essays.map(post => ({ ...post, collection: 'essays' }));
  const musingItems = musings.map(post => ({ ...post, collection: 'musings' }));
  const noteItems = notes.map(post => ({ ...post, collection: 'notes' }));

  const allPosts = [...essayItems, ...musingItems, ...noteItems].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    customData: `
    <image>
    <url>https://www.cloudedhills.comm/favicon.ico</url>
    <title>Clouded Hills</title>
    <link>https://www.cloudedhills.com/</link>
    <width>32</width>
    <height>32</height>
    </image>
    `,
    items: allPosts.map((post) => ({
      ...post.data,
      link: `/${post.collection}/${post.id}/`,
      customData: post.data.heroImage ? `<media:content
      type="image/${post.data.heroImage.format == "jpg" ? "jpeg" : "png"}"
      width="${post.data.heroImage.width}"
      height="${post.data.heroImage.height}"
      medium="image"
      url="${context.site + post.data.heroImage.src}" />` : undefined,
    })),
    xmlns: {
      media: "http://search.yahoo.com/mrss/"
    }
  });
}
