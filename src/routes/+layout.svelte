<script>
	import './layout.css';
	import favicon from '$lib/assets/TESSALITEfactory.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
