<script>
	import { onMount } from 'svelte';

	let isOpen = false;
	let dropdown;
	const links = [
		{ href: '/people', label: 'people behind this' },
		{ href: 'https://github.com/notmycode-labs', label: 'github' }
	];

	function handleClickOutside(event) {
		if (dropdown && !dropdown.contains(event.target)) {
			isOpen = false;
		}
	}

	function stopPropagation(event) {
		event.stopPropagation();
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative inline-block" bind:this={dropdown}>
	<button
		on:click={(event) => {
			stopPropagation(event);
			isOpen = !isOpen;
		}}
		class="hover:text-link-text-color transition"
	>
		More
	</button>

	{#if isOpen}
		<div
			class="absolute z-20 mt-2 w-48 border border-gray-300 rounded-md bg-blue-900/40 shadow-lg"
			style="right: 0; left: auto; top: 100%; max-width: calc(100vw - 20px);"
		>
			{#each links as { href, label }}
				<a {href} class="block px-4 py-2" on:click={stopPropagation}>
					{label}
				</a>
			{/each}
		</div>
	{/if}
</div>
