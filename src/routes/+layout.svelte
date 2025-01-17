<script>
	import '../app.css';
	import '../prism-laserwave.css';
	import Navbar from '../components/navbar.svelte';
	import { onMount } from 'svelte';
	import owoify from 'owoify-js';

	let container;

	const thoughts = [
		"i'm sitting in front of my computer and it's late night but i can't sleep, like seriously, why can't i sleep i don't get it, it's just one of those nights, y'know? i'm staring at this screen like it's the only thing that's gonna make sense in my life right now, and yet it feels like nothing does, like everything’s just so pointless sometimes. i just keep scrolling through random stuff, overthinking, not understanding how i ended up here, like how is it even possible for time to just keep ticking away while you're stuck in this endless loop? i don’t even know when i started questioning the meaning of it all but i guess that's what happens when you're awake at this hour, right? anyway, at some point, i looked up and bam, the vastness of the universe hit me, and i couldn't help but feel tiny, like the earth is just this tiny dot floating in space and my problems are basically nothing, but it's too much to wrap my mind around and my tears just dropped when i realized how big the universe is.",
		"i'm sitting in the national park and then i suddenly think about what is life, like what is it really? is it just born, learn, get old and die? i mean, that's what they say, right? it's like some endless cycle that we all go through, just repeating the same thing over and over, waking up, eating, working, sleeping, and then the whole thing just ends one day. i start thinking, maybe there's more to it, but then again, what if there isn’t? are we all just tiny pieces in some bigger puzzle that we’ll never understand? how do you even find meaning in all of this when it just seems so... ordinary? is it really all about survival, and if so, what's the point of anything else? these questions just keep swirling in my head, and i'm starting to feel overwhelmed by the weight of it all.",
		"why this exam paper can direct my fuckin life? like seriously, it’s just a piece of paper with a bunch of questions on it, but somehow, it’s got the power to determine where i end up in life. it's so ridiculous when you think about it, how something so small can decide so much, like one stupid test can determine your future, your success, your worth. and why am i even letting this piece of paper have so much control over me? why am i sitting here stressing over answers, like the entire direction of my life hinges on whether i get a few marks right or wrong? honestly, it feels like everything is set up to limit you. you work hard, you follow the rules, but in the end, it still feels like you’re stuck in this system where someone else controls the game. i mean, humans created all this, right? we made the rules, we built the systems, so why the hell does it feel like we’re being directed by the very things we created? it’s like we’ve made a world that limits us, traps us, and makes us forget that we’re supposed to be in control.",
		"okay, so here we are, running this endless race, but no one even knows where the damn finish line is, right? we’re all sprinting, pushing ourselves, trying to get ahead, but for what? like, does anyone actually know where this whole thing ends? everyone’s just chasing something, but it’s like we’re all running in circles, trying to catch up with some vague idea of success or happiness, but we have no clue what that even looks like. it’s crazy how we’re constantly told to keep moving, keep achieving, but what happens when you stop and wonder, 'am i even running in the right direction?' like, maybe the whole thing’s a joke, and we’re just all caught up in it, too busy focusing on everyone else’s pace to realize we’re all just racing towards some invisible line that might not even be there.",
		'what the actual fuck is happiness? like, seriously, what is it really? we’ve all been told to chase it, like it’s this magical thing we’re supposed to reach, but no one seems to agree on what it even is. is it just some fleeting feeling, or is it this deep, life-changing state of mind that we’re all supposed to find? i mean, humans literally just defined it, right? like we made up this whole concept of happiness, as if it’s the ultimate goal, the thing we should all be striving for, but what if it’s just some illusion? what if the whole idea of happiness is just a distraction, a way to get us to keep working and achieving without ever stopping to question what we really need? we’ve built this idea that happiness equals success, or that it comes from'
	];

	let selectedThought = thoughts[Math.floor(Math.random() * thoughts.length)];
	const allWords = selectedThought.split(' ');

	let wordsData = [];

	function owoifyText(node, level = 'owo') {
		if (node.nodeType === Node.TEXT_NODE) {
			node.textContent = owoify(node.textContent, level);
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			node.childNodes.forEach((child) => owoifyText(child, level));
		}
	}

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const replaceWithOwo = urlParams.has('owo');
		const owoLevel = urlParams.get('owo') || 'owo';

		if (replaceWithOwo) {
			owoifyText(document.body, owoLevel);
		}

		allWords.forEach((word) => {
			const wordElement = document.createElement('div');
			wordElement.className = 'absolute text-white/10 text-xs z-0';

			wordElement.textContent = word;

			const position = {
				x: Math.random() * (window.innerWidth - 10),
				y: Math.random() * (window.innerHeight - 10)
			};

			wordElement.style.left = `${position.x}px`;
			wordElement.style.top = `${position.y}px`;

			container.appendChild(wordElement);

			wordElement.style.animation = `moveWord ${Math.random() * 10 + 5}s ease-in-out infinite`;

			wordsData.push({ element: wordElement, position });
		});
	});
</script>

<div class="md:container md:mx-auto relative w-screen px-2 h-screen overflow-x-hidden">
	<div bind:this={container} class="absolute inset-0 z-0 pointer-events-none"></div>
	<div class="relative z-10">
		<Navbar />
		<slot />
	</div>
</div>

<style>
	@keyframes moveWord {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(calc(100vw * 0.1), calc(100vh * 0.1));
		}
		50% {
			transform: translate(calc(100vw * -0.1), calc(100vh * -0.1));
		}
		75% {
			transform: translate(calc(100vw * 0.1), calc(100vh * -0.1));
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>
