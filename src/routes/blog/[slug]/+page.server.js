export const load = async ({ params }) => {
	const { slug } = params;

	const post = await import(`$contents/${slug}.md`);
	const { metadata, default: content } = post;

	const { html } = await content.render();

	console.log({ html, metadata });

	return {
		content: html,
		meta: metadata
	};
};
