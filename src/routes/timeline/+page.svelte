<script>
	let timelineEvents = [
		{ date: '2024-01-01', description: 'meow' },
		{ date: '2024-02-01', description: 'meow' },
		{ date: '2024-03-01', description: 'meow' },
		{ date: '2024-04-01', description: 'meow' }
	];
</script>

<div class="max-w-3xl mx-auto p-4">
	<div class="relative border-l-2">
		{#each timelineEvents as event, index (event.date)}
			<div class="mb-8 ml-4">
				{#if index < timelineEvents.length - 1}
					<div class="absolute w-0.5 h-full top-1/2 transform -translate-y-1/2"></div>
				{/if}

				<div class="ml-4">
					<div class="text-sm">{event.date}</div>
					<div class="mt-2">{event.description}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
