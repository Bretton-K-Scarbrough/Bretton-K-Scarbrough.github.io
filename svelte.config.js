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
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
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
