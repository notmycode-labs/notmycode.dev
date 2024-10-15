<script>
	export let data = {};
</script>

<h1 class="text-lg">Developer info</h1>
<div class="border p-2 rounded-md">
	<h2 class="text-lg">{data.name} ({data.irl_name})</h2>
	<p>{data.desc}</p>
	<p><strong>Birth date:</strong> {data.birth_date}</p>
	<div class="mt-2">
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
