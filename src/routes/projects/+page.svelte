<script>
	import timeFormatHelper from '../../lib/timeFormat';
	export let data = [];
</script>

{#each data.data as project}
	<div
		class="my-1.5 shadow-md rounded-lg overflow-hidden border hover:border-pink-700 border-pink-300"
	>
		<div class="p-2">
			<a class="text-xl font-semibold" href={project.link}>{project.title}</a>
			<p class="mb-2">{project.description}</p>
			<h4 class="text-sm font-bold">Maintained By <a class="text-sm font-bold" href={'/people/' + project.maintainer}>{project.maintainer}</a></h4>
			<h4 class="text-sm font-bold">
				{#if project.start_date}
					{timeFormatHelper(project.start_date)}
				{/if} - {project.end_date ? timeFormatHelper(project.end_date) : 'present'}
			</h4>
		</div>
		<div class="p-2 border-t border-white">
			<a href={project.link} target="_blank" rel="noopener noreferrer" class="font-bold"
				>Visit Project</a
			>
		</div>
	</div>
{/each}
