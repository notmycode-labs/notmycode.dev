<script>
	export let data;
</script>

<div class="">
	{#each data.data as user}
		<div class="border p-2 rounded-md mt-1.5 hover:border-pink-700 border-pink-300 w-full">
			<h2 class="font-bold text-lg">
				<a href={`/people/${user.name.toLowerCase()}`}>{user.name}</a>
			</h2>
			<p>IRL Name: {user.irl_name || 'N/A'}</p>
			<p>Role: {user.role}</p>
		</div>
	{/each}
</div>
