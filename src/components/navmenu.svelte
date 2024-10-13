<script>
	import { onMount, onDestroy } from 'svelte';

	let isOpen = false;
	let dropdown;

	const links = [
		{ href: '/about', label: 'Who tf we are' },
		{ href: '/projects', label: 'OUR projects' },
		{ href: '/people', label: 'people behind this' }
	];

	function handleClickOutside(event) {
		if (dropdown && !dropdown.contains(event.target)) {
			isOpen = false;
		}
	}

	
	onMount(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative inline-block" bind:this={dropdown}>
	<button class="" on:click={() => (isOpen = !isOpen)}> Menu </button>

	{#if isOpen}
		<div
			class="absolute mt-2 w-48 border border-gray-300 rounded-md bg-[var(--background-color)] shadow-lg
                  right-0 sm:left-0 sm:right-auto sm:top-full"
		>
			{#each links as { href, label }}
				<a {href} class="block px-4 py-2 hover:bg-gray-800">
					{label}
				</a>
			{/each}
		</div>
	{/if}
</div>
