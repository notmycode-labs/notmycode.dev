<script>
	import '../app.css';
	import '../prism-laserwave.css';
	import Navbar from '../components/navbar.svelte';
	import { onMount } from 'svelte';

	let canvas;
	let ctx;
	const numberOfStars = 1; // Number of stars to create
	let stars = [];

	function getRandomColor() {
		const colors = [
			{ color: 'rgba(255, 255, 255, 1)', probability: 0.4 }, // white
			{ color: 'rgba(255, 255, 0, 1)', probability: 0.2 }, // yellow
			{ color: 'rgba(173, 255, 47, 1)', probability: 0.1 }, // yellowgreen
			{ color: 'rgba(255, 0, 0, 1)', probability: 0.1 }, // red
			{ color: 'rgba(0, 0, 255, 1)', probability: 0.1 }, // blue
			{ color: 'rgba(238, 130, 238, 1)', probability: 0.5 }, // violet
			{ color: 'rgba(0, 255, 0, 1)', probability: 0.5 } // green
		];

		const rand = Math.random();
		let cumulativeProbability = 0;

		for (const color of colors) {
			cumulativeProbability += color.probability;
			if (rand <= cumulativeProbability) {
				return color.color;
			}
		}

		return 'rgba(255, 255, 255, 1)';
	}

	class Star {
		constructor() {
			this.size = Math.random() * 2 + 1;
			this.speed = Math.random() * 3 + 1;
			this.trailOpacity = 0.8;
			this.directionX = Math.random() * 2 - 1;
			this.color = getRandomColor();
			this.trail = [];
			this.glowing = true;
			this.resetPosition();
		}

		resetPosition() {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * 100;
		}

		update() {
			this.y += this.speed;
			this.x += this.directionX;

			if (this.y > canvas.height) {
				this.resetPosition();
				this.color = getRandomColor();
				this.directionX = Math.random() * 2 - 1;
				this.glowing = true;
			}

			if (this.y >= canvas.height - 70) {
				this.glowing = false;
			}

			if (this.x > canvas.width) {
				this.x = 0;
			} else if (this.x < 0) {
				this.x = canvas.width;
			}

			this.trail.push({ x: this.x, y: this.y });

			if (this.trail.length > 10) {
				this.trail.shift();
			}
		}

		draw() {
			ctx.globalCompositeOperation = 'source-over';
			for (let i = 0; i < this.trail.length; i++) {
				const alpha = this.trailOpacity - i * (this.trailOpacity / 10);

				const trailColor = this.color.replace('1)', `${alpha})`);
				ctx.fillStyle = trailColor;
				ctx.fillRect(this.trail[i].x, this.trail[i].y, this.size, this.size);
			}

			if (this.glowing) {
				ctx.shadowBlur = 10;
				ctx.shadowColor = this.color;
			} else {
				ctx.shadowBlur = 0;
			}

			ctx.globalCompositeOperation = 'lighter';
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.size, this.size);

			ctx.shadowBlur = 0;
			ctx.shadowColor = 'rgba(0,0,0,0)';
		}
	}

	onMount(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx = canvas.getContext('2d');

		const backgroundColor = getComputedStyle(document.documentElement)
			.getPropertyValue('--background-color')
			.trim();

		for (let i = 0; i < numberOfStars; i++) {
			stars.push(new Star());
		}

		function animate() {
			ctx.globalCompositeOperation = 'source-over';
			ctx.fillStyle = backgroundColor;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				star.update();
				star.draw();
			});

			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<canvas bind:this={canvas} id="fallingStarsCanvas" class="fixed inset-0 w-full h-full z-[-1]" />

<div class="relative z-10">
	<Navbar />
	<slot />
</div>
