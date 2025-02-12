<script>
	export let data = {};
</script>

<h1 class="text-lg mb-3">Developer info</h1>
<div class="border p-2 rounded-md">
	<h2 class="text-lg font-bold text-[rgb(226,129,216)]">{data.name} ({data.irl_name})</h2>
	<p class="text-sm">{data.desc}</p>
	<div class="mt-3">
		<p><strong>Birth date:</strong> {data.birth_date}</p>
		<strong>Contacts:</strong>

		{#each data.contacts as contact}
			{#each Object.entries(contact) as [platform, value]}
				<p class="block">
					{platform}:
					<a
						href={platform === 'email' ? `mailto:${value}` : value}
						target="_blank"
						rel="noopener noreferrer"
					>
						{value}
					</a>
				</p>
			{/each}
		{/each}
		{#if data.link}
			Website: <a href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</a>
		{/if}
	</div>
</div>
