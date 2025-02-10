<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { onMount } from 'svelte';
	import timeFormatHelper from '../../../lib/timeFormat';
	export let data;

	var diffTime = new Date() - new Date(data.meta.date);
	var diffDays = parseInt(diffTime / (1000 * 60 * 60 * 24), 10);

	onMount(() => {
		const div = document.getElementById('giscus-container');

		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.setAttribute('data-repo', 'notmycode-labs/notmycode.dev');
		script.setAttribute('data-repo-id', 'R_kgDOM-8EIA');
		script.setAttribute('data-category', 'General');
		script.setAttribute('data-category-id', 'DIC_kwDOM-8EIM4CmxfA');
		script.setAttribute('data-mapping', 'pathname');
		script.setAttribute('data-strict', '0');
		script.setAttribute('data-reactions-enabled', '1');
		script.setAttribute('data-emit-metadata', '0');

		script.setAttribute('data-input-position', 'bottom');
		script.setAttribute('data-theme', 'catppuccin_mocha');
		script.setAttribute('data-lang', 'en');
		script.setAttribute('crossorigin', 'anonymous');
		script.async = true;

		div.appendChild(script);
	});
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

	<div id="giscus-container" class="border-t"></div>
</article>
