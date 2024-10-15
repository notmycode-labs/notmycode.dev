export async function load({ params }) {
	const { slug } = params;

	const url = `https://raw.githubusercontent.com/notmycode-labs/everything/refs/heads/main/data/peoples/${slug}.json`;

	const response = await fetch(url);

	if (!response.ok) {
		return {
			status: 404,
			error: new Error('Person not found')
		};
	}

	const data = await response.json();

	return data;
}
