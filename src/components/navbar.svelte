<script>
	import Navmenu from './navmenu.svelte';
</script>

<nav class="flex items-center py-1.5">
	<!--<img class="mr-1.5 h-auto w-8 rounded-full"  height="64" width="64"/> */}-->
	<a href="/">
		<span class="text-xl font-bold">Home</span>
	</a>

	<div class="text-md ml-auto flex space-x-2 font-bold">
		<div>
			<a href="https://github.com/notmycode-labs" target="_blank" rel="noopener noreferrer"
				>GitHub</a
			>
		</div>
		<div>
			<a href="/blog">Blog</a>
		</div>
		<div>
			<Navmenu />
		</div>
	</div>
</nav>
