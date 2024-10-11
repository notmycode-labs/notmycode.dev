export const load = async () => {
	const posts = import.meta.glob('$contents/*.md');

	const data = await Promise.all(
		Object.entries(posts).map(async ([path, resolver]) => {
			const post = await resolver();
			const { metadata } = post;
			const slug = path.split('/').pop().replace('.md', '');
			return { slug, ...metadata };
		})
	);

	return {
		data
	};
};
