// import rss from '@astrojs/rss';
// import { getCollection } from 'astro:content';
// import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// export async function GET(context) {
// 	const posts = await getCollection('blog');
// 	return rss({
// 		title: SITE_TITLE,
// 		description: SITE_DESCRIPTION,
// 		site: context.site,
// 		items: posts.map((post) => ({
// 			...post.data,
// 			link: `/blog/${post.id}/`,
// 		})),
// 	});
// }
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}