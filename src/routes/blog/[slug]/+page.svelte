<script>
	import { MetaTags } from 'svelte-meta-tags';
	import timeFormatHelper from '../../../lib/timeFormat';
	export let data;

	var diffTime = new Date() - new Date(data.meta.date);
	var diffDays = parseInt(diffTime / (1000 * 60 * 60 * 24), 10);
</script>

<MetaTags
	title={data.meta.title}
	description="Everything works fine- uh fi-fire!"
	openGraph={{
		url: 'https://notmycode.dev',
		title: data.meta.title,
		description: data.meta.desc,
		siteName: `Posted by ${data.meta.author} on ${timeFormatHelper(data.meta.date)} - ${diffDays} days ago`,
		images: [
			{
				url: 'https://mac.notmycode.dev/images/PSX_20240813_112556.jpg',
				width: 900,
				height: 800
			}
		]
	}}
	twitter={{
		title: data.meta.title,
		description: data.meta.desc,
		image: 'https://mac.notmycode.dev/images/PSX_20240813_112556.jpg',
		cardType: 'summary_large_image'
	}}
/>

<article
	class="prose overflow-y-scroll md:prose-lg lg:prose-3xl p-2 prose-h1:text-3xl prose-invert prose-neutral mx-auto h-screen prose-img:rounded-xl prose-video:rounded-lg"
>
	<a class="not-prose" href="/blog">Return to /blog</a>
	{@html data.content}
</article>
