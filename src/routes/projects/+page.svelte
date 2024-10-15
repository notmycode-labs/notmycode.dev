<script>
	import timeFormatHelper from '../../lib/timeFormat'
	export let data = [];

</script>

{#each data.data as project}
	<div
		class="my-1.5 shadow-md rounded-lg overflow-hidden border hover:border-pink-700 border-pink-300"
	>
		<div class="p-2">
			<h2 class="text-xl font-semibold">{project.title}</h2>
			<h4 class="text-sm font-bold">{project.maintainer}</h4>
			<h4 class="text-sm font-bold">
				{#if project.start_date}
					{timeFormatHelper(project.start_date)}
				{/if} - {project.end_date ? timeFormatHelper(project.end_date) : 'present'}
			</h4>

			<p class="mt-2">{project.description}</p>
		</div>
		<div class="p-2 border-t border-white">
			<a href={project.link} target="_blank" rel="noopener noreferrer" class="font-bold">Visit Project</a>
		</div>
	</div>
{/each}
