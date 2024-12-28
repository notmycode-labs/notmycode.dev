import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import sizeReportPlugin from './sizereporter'


export default defineConfig({
	plugins: [sveltekit(), sizeReportPlugin()]
});
