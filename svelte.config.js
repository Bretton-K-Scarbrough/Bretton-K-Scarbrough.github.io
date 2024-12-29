import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import remarkParse from 'remark-parse'; // Parses Markdown
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from 'remark-math'; // Parses math syntax in Markdown
import remarkRehype from 'remark-rehype'; // Converts remark AST to rehype AST
import rehypeStringify from 'rehype-stringify'; // Converts rehype AST to HTML

const extensions = ['.svelte', '.md'];


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// Hope this works!!!!!
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/Bretton-K-Scarbrough' : '' // Replace <repo-name> with your GitHub repo name
		},
		prerender: {
			handleHttpError: 'warn'
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions,
			remarkPlugins: [
				remarkMath // Parses math expressions
			],
			rehypePlugins: [
				rehypeKatexSvelte,
			]
		})
	],
	extensions
};

export default config;
