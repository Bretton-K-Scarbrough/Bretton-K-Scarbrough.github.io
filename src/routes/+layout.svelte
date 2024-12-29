<script>
	import '$lib/scss/global.scss';
	import { onMount, afterUpdate } from 'svelte';
	// import { renderMathJax } from '$lib/mathjax';

	// Ensure MathJax runs on initial load and every update
	// onMount(() => {
	//     renderMathJax();
	// });

	// afterUpdate(() => {
	//     renderMathJax();
	// });


</script>

<slot />
