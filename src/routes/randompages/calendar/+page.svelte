<!-- eslint-disable -->

<script>
	const events = {
		'01-01-2025': "New Year's Day",
		'14-02-2025': "Valentine's Day",
		'25-12-2025': 'Christmas Day'
	};

	const isLeapYear =
		new Date().getFullYear() % 4 === 0 &&
		(new Date().getFullYear() % 100 !== 0 || new Date().getFullYear() % 400 === 0);

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	if (isLeapYear) {
		daysInMonth[1] = 29;
	}

	let showModal = false;
	let selectedDay = null;
	let eventMessage = '';

	function getFormattedDate(day, monthIndex) {
		const monthStr = (monthIndex + 1).toString().padStart(2, '0');
		const dayStr = day.toString().padStart(2, '0');
		const year = new Date().getFullYear();
		return `${dayStr}-${monthStr}-${year}`;
	}

	function getStartDayOfMonth(monthIndex) {
		const year = new Date().getFullYear();
		const firstDay = new Date(year, monthIndex, 1).getDay();
		return firstDay;
	}

	function hasEvent(day, monthIndex) {
		return events[getFormattedDate(day, monthIndex)] !== undefined;
	}

	function showEvent(day, monthIndex) {
		selectedDay = day;
		const date = getFormattedDate(day, monthIndex);
		eventMessage = events[date] || 'No event for this day.';
		showModal = true; // Show the modal when an event is clicked
	}

	function closeModal() {
		showModal = false;
	}
</script>

<div>
	<h1 class="text-2xl font-bold mb-6">notmycode Calendar</h1>

	<div>
		{#each months as monthName, monthIndex}
			<h2 class="text-xl font-bold mt-6 mb-2">{monthName}</h2>
			<div class="grid grid-cols-7 gap-2">
				{#each daysOfWeek as dayOfWeek}
					<div class="font-semibold text-center">{dayOfWeek}</div>
				{/each}

				{#each Array(getStartDayOfMonth(monthIndex)) as _, index}
					<div class="p-2" key={index}></div>
				{/each}

				{#each Array(daysInMonth[monthIndex])
					.fill(0)
					.map((_, i) => i + 1) as day}
					<button
						class="p-2 text-center rounded cursor-pointer hover:bg-pink-400/20 {hasEvent(
							day,
							monthIndex
						)
							? 'bg-pink-400'
							: ''}"
						on:click={() => showEvent(day, monthIndex)}
						tabindex="0"
					>
						<div class="text-xs font-semibold">{day}</div>
					</button>
				{/each}
			</div>
		{/each}
	</div>
</div>

{#if showModal}
	<div class="fixed inset-0 bg-black/50 flex justify-center items-center">
		<div class="bg-gray-800 p-6 rounded-lg text-center border-2 border-blue-400 w-full max-w-md">
			<h2 class="text-xl font-bold mb-4">Event on {selectedDay}</h2>
			<p class="text-sm mb-4">{eventMessage}</p>
			<button
				class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				on:click={closeModal}
			>
				Close
			</button>
		</div>
	</div>
{/if}
