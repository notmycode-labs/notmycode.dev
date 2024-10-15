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
			{#if contact.email}
				<a href="mailto:{contact.email}" class="block">{contact.email}</a>
			{/if}
		{/each}
	</div>
</div>
