<script lang="ts">
	import { footerColumns } from '#lib/site';
	import Logo from './Logo.svelte';
</script>

<footer class="footer">
	<div class="wrap">
		<div class="top">
			<div class="brand">
				<Logo inverse />
				<p class="tagline">AI-powered payments and spend management for growing Indian businesses.</p>
				<address>
					Your Company Pvt. Ltd.<br />Address line, City, State PIN<br />Sales: +91 00000 00000
				</address>
			</div>
			<div class="cols">
				{#each footerColumns as col}
					<nav aria-label={col.title}>
						<h3>{col.title}</h3>
						{#each col.links as link}
							<a href={link.href}>{link.label}</a>
						{/each}
					</nav>
				{/each}
			</div>
		</div>
		<div class="bottom">
			<p>© 2026 Settlr. All rights reserved. · Built in India</p>
			<div class="legal">
				<a href="#">Privacy</a>
				<a href="#">Terms</a>
				<a href="#">SLA</a>
				<a href="#">LinkedIn</a>
				<a href="#">X</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--navy);
		padding-top: 80px;
		padding-bottom: 40px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		gap: 64px;
	}
	.brand {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 340px;
		flex-shrink: 0;
	}
	.tagline {
		font-size: 15px;
		line-height: 24px;
		color: var(--on-navy-muted);
	}
	address {
		font-style: normal;
		font-size: 14px;
		line-height: 22px;
		color: var(--on-navy-faint);
	}
	.cols {
		display: flex;
		gap: 64px;
	}
	nav {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	h3 {
		padding-bottom: 6px;
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--white);
	}
	nav a {
		font-size: 15px;
		line-height: 18px;
		color: var(--on-navy-muted);
	}
	nav a:hover,
	.legal a:hover {
		color: var(--white);
	}
	.bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		margin-top: 64px;
		padding-top: 28px;
		border-top: 1px solid var(--navy-line);
		font-size: 14px;
		line-height: 18px;
		color: var(--on-navy-faint);
	}
	.legal {
		display: flex;
		gap: 28px;
	}
	@media (max-width: 1100px) {
		.top {
			flex-direction: column;
			gap: 48px;
		}
		.brand {
			width: auto;
			max-width: 420px;
		}
	}
	@media (max-width: 640px) {
		.footer {
			padding-top: 56px;
		}
		.cols {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 40px 24px;
		}
		.bottom {
			flex-direction: column;
			align-items: flex-start;
			margin-top: 48px;
		}
		.legal {
			flex-wrap: wrap;
			gap: 16px 24px;
		}
	}
</style>
