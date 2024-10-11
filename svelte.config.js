import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: adapter(),
		alias: {
			$contents: path.resolve('./contents')
		}
	},

	preprocess: mdsvex({
		extension: '.md'
	})
};

export default config;
