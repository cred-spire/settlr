<script lang="ts">
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import CtaBand from '#lib/components/CtaBand.svelte';

	let { children } = $props();
</script>

<a class="skip" href="#main">Skip to content</a>
<Header />
<main id="main">
	{@render children()}
	<CtaBand />
</main>
<Footer />

<style>
	.skip {
		position: absolute;
		left: 16px;
		top: -60px;
		z-index: 100;
		padding: 10px 16px;
		background: var(--navy);
		color: var(--white);
		border-radius: 999px;
	}
	.skip:focus {
		top: 16px;
	}
</style>
