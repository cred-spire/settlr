<script lang="ts">
	import { page } from '$app/state';
	import { nav } from '#lib/site';
	import Logo from './Logo.svelte';

	let open = $state(false);
	const current = $derived(page.url.pathname);

	$effect(() => {
		current;
		open = false;
	});
</script>

<header class="header">
	<div class="wrap bar">
		<div class="left">
			<a href="/" aria-label="Settlr home"><Logo /></a>
			<nav class="links" aria-label="Main">
				{#each nav as item}
					<a href={item.href} aria-current={current.startsWith(item.href) ? 'page' : undefined}>{item.label}</a>
				{/each}
			</nav>
		</div>
		<div class="right">
			<!-- svelte-ignore a11y_invalid_attribute (placeholder until sign-in exists) -->
			<a class="signin" href="#">Sign in</a>
			<a class="btn btn-navy demo" href="/early-access">Book a demo</a>
			<button
				class="burger"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				aria-controls="mobile-menu"
				onclick={() => (open = !open)}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
					{#if open}
						<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					{:else}
						<path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<nav id="mobile-menu" class="mobile" aria-label="Mobile">
			{#each nav as item}
				<a href={item.href} aria-current={current.startsWith(item.href) ? 'page' : undefined}>{item.label}</a>
			{/each}
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#">Sign in</a>
		</nav>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--white);
		border-bottom: 1px solid var(--line);
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 24px;
	}
	.left {
		display: flex;
		align-items: center;
		gap: 56px;
	}
	.links {
		display: flex;
		gap: 32px;
	}
	.links a,
	.signin {
		font-size: 15px;
		line-height: 18px;
		font-weight: 500;
		color: var(--navy);
		text-underline-offset: 6px;
	}
	.links a:hover,
	.signin:hover {
		text-decoration: underline 2px var(--line);
	}
	.links a[aria-current='page'] {
		font-weight: 700;
		text-decoration: underline 2px var(--saffron);
	}
	.right {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	.demo {
		padding: 12px 20px;
	}
	.burger {
		display: none;
		color: var(--navy);
	}
	.mobile {
		display: none;
	}

	@media (max-width: 900px) {
		.bar {
			padding-block: 12px 16px;
		}
		.links,
		.signin {
			display: none;
		}
		.right {
			gap: 12px;
		}
		.demo {
			padding: 9px 14px;
			font-size: 13px;
			line-height: 16px;
		}
		.burger {
			display: flex;
		}
		.mobile {
			display: flex;
			flex-direction: column;
			padding: 8px var(--pad-x) 20px;
			border-top: 1px solid var(--line);
		}
		.mobile a {
			padding-block: 14px;
			font-size: 17px;
			font-weight: 500;
			border-bottom: 1px solid var(--mist);
		}
		.mobile a[aria-current='page'] {
			font-weight: 700;
		}
	}
</style>
