<script>
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="notmycode.dev"
	description="Everything works fine- uh fi-fire!"
	openGraph={{
		url: 'https://notmycode.dev',
		title: 'notmycode labs',
		description: 'Everything works fine- uh fi-fire!',
		siteName: 'notmycode',
		images: [
			{
				url: 'https://mac.notmycode.dev/images/PSX_20240813_112556.jpg',
				width: 900,
				height: 800
			}
		]
	}}
	twitter={{
		title: 'notmycode.dev',
		description: 'Everything works fine- uh fi-fire!',
		image: 'https://mac.notmycode.dev/images/PSX_20240813_112556.jpg',
		cardType: 'summary_large_image'
	}}
/>

<div class="">
	<main id="container">
		<div>
			<h1
				id="title"
				class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
			>
				notmycode.dev
			</h1>
			<h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
				Yeah It's not my fucking code
			</h2>
			<p class="text-sm sm:text-lg md:text-xl font-light leading-[1.4] max-w-[28em]">
				And that's why it's
				<a href="/" class="link relative no-underline whitespace-nowrap"> notmycode.dev </a>
			</p>
		</div>
	</main>

	<!--
	<h1 class="text-center text-lg font-bold lg:text-2xl" id="rainbow_title">
		It's not my code<br />that's why it's notmycode.dev
	</h1>-->
</div>
