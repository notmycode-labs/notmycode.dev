<script>
	import '../app.css';
	import '../prism-laserwave.css';
	import Navbar from '../components/navbar.svelte';
	import { onMount } from 'svelte';

	let container;
	let canvas;

	const thoughts = [
		"i'm sitting in front of my computer and it's late night but i can't sleep, like seriously, why can't i sleep i don't get it, it's just one of those nights, y'know? i'm staring at this screen like it's the only thing that's gonna make sense in my life right now, and yet it feels like nothing does, like everything’s just so pointless sometimes. i just keep scrolling through random stuff, overthinking, not understanding how i ended up here, like how is it even possible for time to just keep ticking away while you're stuck in this endless loop? i don’t even know when i started questioning the meaning of it all but i guess that's what happens when you're awake at this hour, right? anyway, at some point, i looked up and bam, the vastness of the universe hit me, and i couldn't help but feel tiny, like the earth is just this tiny dot floating in space and my problems are basically nothing, but it's too much to wrap my mind around and my tears just dropped when i realized how big the universe is.",
		"i'm sitting in the national park and then i suddenly think about what is life, like what is it really? is it just born, learn, get old and die? i mean, that's what they say, right? it's like some endless cycle that we all go through, just repeating the same thing over and over, waking up, eating, working, sleeping, and then the whole thing just ends one day. i start thinking, maybe there's more to it, but then again, what if there isn’t? are we all just tiny pieces in some bigger puzzle that we’ll never understand? how do you even find meaning in all of this when it just seems so... ordinary? is it really all about survival, and if so, what's the point of anything else? these questions just keep swirling in my head, and i'm starting to feel overwhelmed by the weight of it all.",
		"why this exam paper can direct my fuckin life? like seriously, it’s just a piece of paper with a bunch of questions on it, but somehow, it’s got the power to determine where i end up in life. it's so ridiculous when you think about it, how something so small can decide so much, like one stupid test can determine your future, your success, your worth. and why am i even letting this piece of paper have so much control over me? why am i sitting here stressing over answers, like the entire direction of my life hinges on whether i get a few marks right or wrong? honestly, it feels like everything is set up to limit you. you work hard, you follow the rules, but in the end, it still feels like you’re stuck in this system where someone else controls the game. i mean, humans created all this, right? we made the rules, we built the systems, so why the hell does it feel like we’re being directed by the very things we created? it’s like we’ve made a world that limits us, traps us, and makes us forget that we’re supposed to be in control.",
		"okay, so here we are, running this endless race, but no one even knows where the damn finish line is, right? we’re all sprinting, pushing ourselves, trying to get ahead, but for what? like, does anyone actually know where this whole thing ends? everyone’s just chasing something, but it’s like we’re all running in circles, trying to catch up with some vague idea of success or happiness, but we have no clue what that even looks like. it’s crazy how we’re constantly told to keep moving, keep achieving, but what happens when you stop and wonder, 'am i even running in the right direction?' like, maybe the whole thing’s a joke, and we’re just all caught up in it, too busy focusing on everyone else’s pace to realize we’re all just racing towards some invisible line that might not even be there.",
		'what the actual fuck is happiness? like, seriously, what is it really? we’ve all been told to chase it, like it’s this magical thing we’re supposed to reach, but no one seems to agree on what it even is. is it just some fleeting feeling, or is it this deep, life-changing state of mind that we’re all supposed to find? i mean, humans literally just defined it, right? like we made up this whole concept of happiness, as if it’s the ultimate goal, the thing we should all be striving for, but what if it’s just some illusion? what if the whole idea of happiness is just a distraction, a way to get us to keep working and achieving without ever stopping to question what we really need? we’ve built this idea that happiness equals success, or that it comes from'
	];

	let selectedThought = thoughts[Math.floor(Math.random() * thoughts.length)];
	const allWords = selectedThought.split(' ');
	const wordsData = [];

	let isDrawing = false;

	onMount(() => {
		canvas = document.getElementById('backgroundCanvas');
		const ctx = canvas.getContext('2d');
		resizeCanvas();

		window.addEventListener('resize', () => {
			requestAnimationFrame(resizeCanvas);
		});

		allWords.forEach((word) => {
			const wordElement = document.createElement('div');
			wordElement.className = 'message';
			wordElement.textContent = word;

			const position = {
				x: Math.random() * (container.clientWidth - 100),
				y: Math.random() * (container.clientHeight - 100)
			};

			wordElement.style.cssText = `
        position: absolute;
        left: ${position.x}px;
        top: ${position.y}px;
      `;

			container.appendChild(wordElement);
			wordsData.push({ element: wordElement, position });
		});

		wordsData.forEach((_, index) => {
			animateWord(index);
		});

		drawLinesThrottled();
	});

	function resizeCanvas() {
		if (container) {
			canvas.width = container.clientWidth;
			canvas.height = container.clientHeight;
			drawLinesThrottled();
		}
	}

	function drawLinesThrottled() {
		if (isDrawing) return;
		isDrawing = true;

		requestAnimationFrame(() => {
			const ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.strokeStyle = '#2C2F3E';
			ctx.lineWidth = 0.2;

			for (let i = 0; i < wordsData.length - 1; i++) {
				const posA = wordsData[i].position;
				const posB = wordsData[i + 1].position;

				ctx.beginPath();
				ctx.moveTo(posA.x + 20, posA.y + 10);
				ctx.lineTo(posB.x + 20, posB.y + 10);
				ctx.stroke();
			}

			isDrawing = false;
		});
	}

	function animateWord(index) {
		const element = wordsData[index].element;
		const newPosition = {
			x: Math.random() * (container.clientWidth - 100),
			y: Math.random() * (container.clientHeight - 100)
		};

		element.style.cssText = `
      position: absolute;
      left: ${newPosition.x}px;
      top: ${newPosition.y}px;
      transition: left 1s ease, top 1s ease;
    `;

		wordsData[index].position = newPosition;
		drawLinesThrottled();

		setTimeout(() => requestAnimationFrame(() => animateWord(index)), 4000);
	}
</script>

<div bind:this={container} class="relative z-10">
	<Navbar />
	<slot />
</div>

<canvas id="backgroundCanvas"></canvas>

<style>
	.message {
		z-index: -999999999;
		font-size: 6px;
		color: #505050;
	}

	#backgroundCanvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
