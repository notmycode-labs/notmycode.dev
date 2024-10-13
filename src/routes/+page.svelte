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

<div class="flex h-screen justify-center items-center">
	<h1 class="text-center text-lg font-bold lg:text-2xl" id="rainbow_title">
		It's not my code<br />that's why it's notmycode.dev
	</h1>
</div>
