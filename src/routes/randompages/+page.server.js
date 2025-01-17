export async function load() {
	const randomPages = import.meta.glob('./*/*');

	const data = await Promise.all(
		Object.entries(randomPages).map(async ([path, resolver]) => {
			const slug = path.split('/').slice(-2, -1)[0];
			return { slug };
		})
	);
	console.log(data);
	return {
		data
	};
}
