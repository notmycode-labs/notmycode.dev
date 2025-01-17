import fs from 'fs';
import path from 'path';

export async function load() {
	const randomPagesDir = path.resolve(process.cwd(), 'src/routes/randompages');
	const data = fs
		.readdirSync(randomPagesDir)
		.filter((file) => fs.statSync(path.join(randomPagesDir, file)).isDirectory());
	return {
		data
	};
}
