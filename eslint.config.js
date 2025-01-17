import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginSvelte from 'eslint-plugin-svelte';

export default [
	{ files: ['src/**/*.js', 'src/**/*.svelte'] },
	{ ignores: ['.svelte-kit', 'src/routes/randompages/**/*'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended']
];
