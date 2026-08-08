/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 4,
	printWidth: 120,
	trailingComma: 'none',
	jsxSingleQuote: true,
	semi: true,
	singleQuote: true,
	tailwindConfig: './tailwind.config.mjs',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};
