<script>
	import { onMount } from 'svelte';
	import { showFirefoxNotice } from '$lib/stores/firefoxNotice';

	let isOpen = false;
	let isFirefox = false;
	let dropdown;
	const links = [
		{ href: '/people', label: 'people behind this' },
		{ href: 'https://github.com/notmycode-labs', label: 'github' },
		{ href: '/randompages/mailus', label: 'contact us' }
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
		isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
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
			{#if !isFirefox}
				<button
					on:click={() => ($showFirefoxNotice = !$showFirefoxNotice)}
					class="block w-full text-left px-4 py-2 hover:bg-blue-800/40"
				>
					{$showFirefoxNotice ? 'Hide' : 'Show'} Firefox Notice
				</button>
			{/if}
		</div>
	{/if}
</div>
