<script>
	export let data = [];
	console.log(data);
</script>

<ul class="space-y-2">
	{#each data.data as page}
		<li class="rounded-lg p-2 hover:opacity-80 transition-opacity">
			<a href={`/randompages/${page}`} class="text-lg font-semibold">
				{page}
			</a>
		</li>
	{/each}
</ul>
