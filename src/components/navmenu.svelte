<script>
    import { onMount } from 'svelte';

    let isOpen = false;
    let dropdown;
    const links = [{ href: '/people', label: 'people behind this' }];

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
        class="hover:text-link-text-color transition">
        More
    </button>

    {#if isOpen}
        <div class="absolute z-40 mt-2 w-48 border border-gray-300 rounded-md bg-[var(--background-color)] shadow-lg right-0 sm:left-0 sm:right-auto sm:top-full">
            {#each links as { href, label }}
                <a 
                    href={href} 
                    class="block px-4 py-2 hover:bg-gray-800" 
                    on:click={stopPropagation}>
                    {label}
                </a>
            {/each}
        </div>
    {/if}
</div>
