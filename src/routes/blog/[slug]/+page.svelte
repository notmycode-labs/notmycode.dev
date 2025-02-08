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
	class="prose md:prose-lg lg:prose-3xl p-2 prose-h1:text-3xl prose-invert prose-neutral mx-auto h-screen prose-img:rounded-xl prose-video:rounded-lg"
>
	<a class="not-prose" href="/blog">Return to /blog</a>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html data.content}

	<div class="border-b border"></div>
<script src="https://giscus.app/client.js"
        data-repo="notmycode-labs/notmycode.dev"
        data-repo-id="R_kgDOM-8EIA"
        data-category="General"
        data-category-id="DIC_kwDOM-8EIM4CmxfA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="purple_dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>



</article>
