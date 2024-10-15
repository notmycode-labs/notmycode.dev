export async function load() {
	const res = await fetch(
		'https://raw.githubusercontent.com/notmycode-labs/everything/refs/heads/main/data/projects.json'
	);
	const data = await res.json();
	console.log(data);
	return { data };
}
