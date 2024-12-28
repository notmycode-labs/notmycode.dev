<script>
	import Navmenu from './navmenu.svelte';

	import { onMount } from 'svelte';

	function hashString(str) {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = (hash * 31 + str.charCodeAt(i)) & 0xffff;
		}
		return hash;
	}

	function randomColor(seed) {
		const r = Math.abs((seed * 9301 + 49297) % 233280) % 256;
		const g = Math.abs((seed * 1033 + 4112) % 233280) % 256;
		const b = Math.abs((seed * 1731 + 32333) % 233280) % 256;
		return `rgb(${r}, ${g}, ${b})`;
	}

	function generate8x8Pattern(userAgent) {
		const hash = hashString(userAgent);
		const pattern = [];

		for (let i = 0; i < 64; i++) {
			const colorSeed = Math.abs(hash + i);
			pattern.push(randomColor(colorSeed));
		}

		return pattern;
	}

	onMount(() => {
		const userAgent = navigator.userAgent;
		const pattern = generate8x8Pattern(userAgent);

		const canvas = document.getElementById('randomCanvas');
		const ctx = canvas.getContext('2d');
		const size = 4;
		let idx = 0;

		for (let y = 0; y < 8; y++) {
			for (let x = 0; x < 8; x++) {
				ctx.fillStyle = pattern[idx];
				ctx.fillRect(x * size, y * size, size, size);
				idx++;
			}
		}
	});
</script>

<nav class="py-4 px-4 flex flex-wrap items-center justify-between">
	<a
		href="/"
		class="text-xl font-bold text-white hover:text-link-text-color transition mb-2 sm:mb-0 inline-flex items-center"
	>
		notmycode.dev
		<canvas id="randomCanvas" class="ml-2" width="16" height="16"></canvas>
	</a>

	<div class="flex flex-wrap justify-center space-x-2 text-base font-medium">
		<a data-sveltekit-prefetch href="/about" class="hover:text-link-text-color transition">About</a>
		<span>/</span>
		<a data-sveltekit-prefetch href="/projects" class="hover:text-link-text-color transition"
			>Projects</a
		>
		<span>/</span>
		<a data-sveltekit-prefetch href="/blog" class="hover:text-link-text-color transition">Blog</a>
		<span>/</span>
		<div>
			<Navmenu />
		</div>
	</div>
</nav>
