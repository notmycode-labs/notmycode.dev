<script>
	import timeFormatHelper from '../../lib/timeFormat';
	export let data = [];

	$: sortedData = [...data.data].sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<svelte:head>
	<title>notmycode blog</title>
	<meta name="description" content="Nothing special But it works!." />
</svelte:head>

<div>
	{#each sortedData as item}
		<div class="border p-2 rounded-md mt-1.5 hover:border-pink-700 border-pink-300 w-full">
			<div class="p-2 border-b border-white">
				<a href={`/blog/${item.slug}`}>
					<h2 class="font-bold text-lg">{item.title}</h2>
				</a>
			</div>
			<p class="text-sm">{item.desc}</p>

			<div>
				Tags:
				{#each item.tags as tag}
					<span class="border mt-1.5 px-2 rounded-lg text-xs">{tag}</span>
				{/each}
			</div>

			<p class="text-xs font-semibold">
				Posted by <a href={'/people/' + item.author}>{item.author}</a> on {timeFormatHelper(
					item.date
				)}
			</p>
		</div>
	{/each}
</div>
