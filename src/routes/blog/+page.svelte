<script>
	import { onMount } from 'svelte';
	import Fuse from 'fuse.js';
	import timeFormatHelper from '../../lib/timeFormat';
	export let data = [];

	$: sortedData = [...data.data].sort((a, b) => new Date(b.date) - new Date(a.date));

	const fuseOptions = {
		
		keys: ['title', 'author', 'desc', 'tags']
	};

	const fuse = new Fuse(data.data, fuseOptions);

	let query = '';
	let results = [];
	let filteredResults = [];
	let showDropdown = false;

	function handleSearch() {
		results = fuse.search(query);
		filteredResults = results.map((result) => ({
			slug: result.item.slug,
			title: result.item.title
		}));

		showDropdown = true;
	}
	function handleClickOutside(event) {
		const searchBox = document.querySelector('.relative');
		if (!searchBox.contains(event.target)) {
			showDropdown = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<svelte:head>
	<title>notmycode blog</title>
	<meta name="description" content="Nothing special But it works!." />
</svelte:head>

<div class="relative">
	<input
		class="bg-transparent px-1.5 border border-pink-600 rounded-md w-full"
		type="text"
		bind:value={query}
		placeholder="Search..."
		on:input={handleSearch}
		on:focus={() => (showDropdown = true)}
	/>

	{#if query && filteredResults.length > 0 && showDropdown}
		<ul
			class="absolute mt-1 border bg-[var(--background-color)] w-full rounded-md max-h-48 overflow-auto"
		>
			{#each filteredResults as result}
				<a href={`/blog/${result.slug}`}>
					<li class="p-2 hover:bg-pink-700/60 hover:text-white cursor-pointer">
						{result.title}
					</li></a
				>
			{/each}
		</ul>
	{/if}
</div>

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
