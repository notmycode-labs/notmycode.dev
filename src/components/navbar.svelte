<script>
	import Navmenu from './navmenu.svelte';
</script>

<nav class="py-4 px-4 flex flex-wrap items-center justify-between">
	<a
		href="/"
		class="text-xl font-bold text-white hover:text-link-text-color transition mb-2 sm:mb-0"
	>
		notmycode.dev
	</a>

	<div class="flex flex-wrap justify-center space-x-2 text-base font-medium">
		<!-- Static Links for Home and others -->
		<a href="/" class="hover:text-link-text-color transition">Home</a>
		<span>/</span>
		<a href="/about" class="hover:text-link-text-color transition">About</a>
		<span>/</span>
		<a href="/projects" class="hover:text-link-text-color transition">Projects</a>
		<span>/</span>

		<div>
			<Navmenu />
		</div>
	</div>
</nav>
