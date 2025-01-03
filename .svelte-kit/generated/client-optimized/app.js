export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')
];

export const server_loads = [2];

export const dictionary = {
		"/(waves)": [~5,[3]],
		"/(waves)/404": [6,[3]],
		"/(blog-article)/FourierTransforms": [4,[2]],
		"/(waves)/blog": [~7,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';