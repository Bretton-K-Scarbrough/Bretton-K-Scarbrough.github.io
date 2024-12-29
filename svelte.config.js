import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import remarkParse from 'remark-parse'; // Parses Markdown
import remarkMath from 'remark-math'; // Parses math syntax in Markdown
import remarkRehype from 'remark-rehype'; // Converts remark AST to rehype AST
import rehypeStringify from 'rehype-stringify'; // Converts rehype AST to HTML
import rehypeKatexSvelte from 'rehype-katex-svelte'; // Renders math expressions
import rehypeExternalLinks from 'rehype-external-links'; // Handles external links
import rehypeSlug from 'rehype-slug'; // Adds slugs to headings
import rehypeAutolinkHeadings from 'rehype-autolink-headings'; // Adds links to headings

const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// pages: 'build', // Output directory for built files
			// assets: 'build',
			fallback: '404.html', // No SPA fallback
		}),
		// paths: {
		// 	// Conditionally set base path for production or local development
		// 	base: process.env.NODE_ENV === 'production' ? '/Bretton-K-Scarbrough.github.io' : ''
		// },
		prerender: {
			entries: ['*'], // Prerender all pages
			handleHttpError: 'warn' // Warn instead of failing on HTTP errors
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions,
			remarkPlugins: [
				remarkParse, // Parses Markdown structure
				remarkMath // Parses math expressions
			],
			rehypePlugins: [
				rehypeKatexSvelte, // Renders math with KaTeX
				rehypeExternalLinks, // Adds 'target' and 'rel' to external links
				rehypeSlug, // Adds 'id' attributes to headings
				[
					rehypeAutolinkHeadings,
					{
						// Adds clickable links to headings
						behavior: 'prepend',
						properties: {
							className: ['heading-link'],
							title: 'Permalink',
							ariaHidden: 'true'
						},
						content: {
							type: 'element',
							tagName: 'span',
							properties: {},
							children: [{ type: 'text', value: '#' }]
						}
					}
				]
			]
		})
	],
	extensions
};

export default config;
