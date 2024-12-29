// Base values for meta tags
// So they can be added as suffixes on different pages
// Via <svelte:head>

// export const siteBaseUrl = 'https://bretton-k-scarbrough.github.io'; // Base URL of your site

import { base } from '$app/paths';
export const siteBaseUrl = 'https://bretton-k-scarbrough.github.io/';

export const keywords = [
	'Bretton K Scarbrough',
	'Blog',
	'Portfolio',
	'Static Site',
	'Web Development',
	'Math',
	'Science'
];

export const description =
	"The personal blog and portfolio of Bretton K Scarbrough, featuring posts on web development, math, science, and other interests.";

export const title = 'Bretton K Scarbrough - Blog and Portfolio';

export const image = `${siteBaseUrl}/images/site-preview.png`; // Preview image for social sharing
