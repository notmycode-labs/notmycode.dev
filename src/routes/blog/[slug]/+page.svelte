<script>
	export let data;
</script>

<article
	class="prose md:prose-lg lg:prose-3xl p-2 prose-h1:text-3xl prose-invert prose-neutral mx-auto h-screen prose-img:rounded-xl prose-video:rounded-lg"
>
	<a class="not-prose" href="/blog">Return to /blog</a>
	{@html data.content}
</article>
