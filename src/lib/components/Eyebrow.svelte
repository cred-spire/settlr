<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		dot = false,
		tone = 'muted',
		children
	}: { dot?: boolean; tone?: 'muted' | 'saffron' | 'warm'; children: Snippet } = $props();
</script>

<div class="eyebrow {tone}">
	{#if dot}<span class="dot" aria-hidden="true"></span>{/if}
	<span>{@render children()}</span>
</div>

<style>
	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.saffron {
		color: var(--saffron);
	}
	.warm {
		color: var(--saffron-text);
	}
	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--saffron);
		flex-shrink: 0;
	}
</style>
