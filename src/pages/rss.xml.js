import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
  const posts = await getCollection('essays');
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
    items: posts.map((post) => ({
      ...post.data,
      link: `/essays/${post.id}/`,
      customData: `<media:content
      type="image/${post.data.heroImage.format == "jpg" ? "jpeg" : "png"}"
      width="${post.data.heroImage.width}"
      height="${post.data.heroImage.height}"
      medium="image"
      url="${context.site + post.data.heroImage.src}" />`,
    })),
    xmlns: {
      media: "http://search.yahoo.com/mrss/"
    }
  });
}
