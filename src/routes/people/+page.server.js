export async function load() {
	const url =
		'https://raw.githubusercontent.com/notmycode-labs/everything/refs/heads/main/data/peoples.json';

	const response = await fetch(url);

	if (!response.ok) {
		return {
			status: 404,
			error: new Error('Person not found')
		};
	}

	const data = await response.json();

	return { data };
}
