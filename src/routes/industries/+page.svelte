<script lang="ts">
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import { images } from '#lib/site';

	const industries = [
		['Financial services', 'Strict audit needs and multi-level sign-offs on every rupee.', 'Maker-checker approvals with an exportable, timestamped trail.'],
		['Manufacturing', 'Hundreds of suppliers, POs and GRNs that never quite match.', 'Three-way matching of PO, GRN and invoice before anything is paid.'],
		['Construction', 'Cash advances to sites that are hard to track and reconcile.', 'Project-wise cards and budgets, with receipts captured on site.'],
		['SaaS & tech', 'Subscriptions scattered across personal cards and forgotten renewals.', 'One virtual card per tool, with renewal alerts and owner tags.'],
		['Mobility & logistics', 'Fuel, tolls and driver expenses paid in cash across many routes.', 'Fleet cards and UPI spends tagged to each vehicle and trip.'],
		['D2C brands', 'Ad spend, warehouses and GST filings across several states.', 'Multi-GSTIN support and dedicated cards for every marketing channel.'],
		['Non-profits', 'Grant money that must be traced to each programme for donors.', 'Fund-wise budgets and ready-made utilisation reports for donors.'],
		['Food & hospitality', 'Daily petty cash and fresh-produce vendors across many outlets.', 'Outlet-level wallets and same-day vendor payouts over UPI.']
	];

	const match = [
		{ title: 'Purchase order PO-1184', meta: '500 units · ₹320 each', status: 'Matched', ok: true },
		{ title: 'Goods receipt GRN-0931', meta: '480 units received', status: '20 short', ok: false },
		{ title: 'Supplier invoice', meta: '500 units billed · ₹1,60,000', status: 'On hold', ok: false }
	];
</script>

<svelte:head>
	<title>Industries — Settlr</title>
	<meta name="description" content="Settlr comes with workflows built for the way money actually moves in your sector." />
</svelte:head>

<section class="wrap hero">
	<div class="hero-title">
		<Eyebrow dot>Industries</Eyebrow>
		<h1 class="display">Same platform. Shaped around how your industry spends.</h1>
	</div>
	<p class="hero-sub">
		From site advances to donor reporting, Settlr comes with workflows built for the way money actually moves in your sector.
	</p>
</section>

<section class="wrap table-wrap">
	<div class="thead" aria-hidden="true">
		<span class="c1">Industry</span>
		<span class="c2">The usual headache</span>
		<span class="c3">How Settlr helps</span>
		<span class="c4"></span>
	</div>
	<ul class="rows">
		{#each industries as [name, pain, fix]}
			<li>
				<a href="/early-access" class="row">
					<h2 class="c1">{name}</h2>
					<p class="c2"><span class="mobile-label">The usual headache</span>{pain}</p>
					<p class="c3"><span class="mobile-label">How Settlr helps</span>{fix}</p>
					<span class="c4 arrow" aria-hidden="true">→</span>
				</a>
			</li>
		{/each}
	</ul>
	<div class="photos">
		<img src={images.industriesA} alt="A warehouse floor with stacked goods" loading="lazy" />
		<img src={images.industriesB} alt="A construction site at dusk" loading="lazy" />
	</div>
</section>

<section class="spotlight">
	<div class="wrap spot-inner">
		<div class="spot-copy">
			<Eyebrow dot tone="saffron">Spotlight · Manufacturing</Eyebrow>
			<h2>No more paying for goods that never arrived.</h2>
			<p>
				Settlr checks every supplier invoice against the purchase order and the goods receipt note. If quantities or prices
				don't line up, the bill waits — automatically.
			</p>
			<div><a class="btn btn-saffron" href="/early-access">See manufacturing workflows</a></div>
		</div>
		<div class="match">
			<p class="match-label">3-way match · INV-2207</p>
			{#each match as m}
				<div class="match-row">
					<div>
						<strong>{m.title}</strong>
						<span>{m.meta}</span>
					</div>
					<span class="pill" class:ok={m.ok}>{m.status}</span>
				</div>
			{/each}
			<p class="match-note">Payment held until the supplier sends a revised invoice for 480 units.</p>
		</div>
	</div>
</section>
<div class="spacer"></div>

<style>
	.hero {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 80px;
		padding-top: clamp(56px, 7.2vw, 104px);
		padding-bottom: 72px;
	}
	.hero-title {
		display: flex;
		flex-direction: column;
		gap: 24px;
		max-width: 820px;
	}
	.hero-sub {
		width: 380px;
		flex-shrink: 0;
		font-size: 18px;
		line-height: 29px;
		color: var(--muted);
	}

	.table-wrap {
		padding-bottom: var(--section-y);
	}
	.thead,
	.row {
		display: flex;
		align-items: center;
		gap: 32px;
	}
	.thead {
		padding-bottom: 16px;
		border-bottom: 1px solid var(--navy);
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.c1 {
		width: 340px;
		flex-shrink: 0;
	}
	.c2,
	.c3 {
		flex: 1;
	}
	.c4 {
		width: 40px;
		flex-shrink: 0;
	}
	.rows {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.row {
		padding-block: 30px;
		border-bottom: 1px solid var(--line);
	}
	.row h2 {
		font-size: 28px;
		line-height: 34px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}
	.row p {
		font-size: 16px;
		line-height: 25px;
	}
	.row .c2 {
		color: var(--muted);
	}
	.arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		border: 1px solid var(--line);
		border-radius: 50%;
		font-size: 18px;
		transition:
			background-color 0.15s ease,
			color 0.15s ease;
	}
	.row:hover .arrow {
		background: var(--navy);
		border-color: var(--navy);
		color: var(--white);
	}
	.mobile-label {
		display: none;
	}
	.photos {
		display: flex;
		gap: 20px;
		padding-top: 56px;
	}
	.photos img {
		flex: 1;
		min-width: 0;
		height: 400px;
		object-fit: cover;
		border-radius: 24px;
	}

	.spotlight {
		background: var(--navy);
		color: var(--white);
		padding-block: var(--section-y);
	}
	.spot-inner {
		display: flex;
		gap: 64px;
	}
	.spot-copy {
		display: flex;
		flex-direction: column;
		gap: 24px;
		width: 560px;
		flex-shrink: 0;
	}
	.spot-copy h2 {
		font-size: clamp(32px, 3.6vw, 52px);
		line-height: 1.115;
		font-weight: 600;
		letter-spacing: -0.035em;
	}
	.spot-copy p {
		font-size: 17px;
		line-height: 28px;
		color: var(--on-navy-muted);
	}
	.spot-copy div {
		padding-top: 8px;
	}
	.match {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 32px;
		background: var(--navy-2);
		border-radius: 24px;
	}
	.match-label {
		padding-bottom: 8px;
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--on-navy-faint);
	}
	.match-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 18px 20px;
		background: var(--navy-3);
		border-radius: 14px;
	}
	.match-row div {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.match-row strong {
		font-size: 16px;
		line-height: 20px;
		font-weight: 600;
	}
	.match-row div span {
		font-size: 14px;
		line-height: 18px;
		color: var(--on-navy-muted);
	}
	.pill {
		flex-shrink: 0;
		padding: 6px 12px;
		border-radius: 999px;
		background: #f5b53d2e;
		font-size: 13px;
		line-height: 16px;
		font-weight: 600;
		color: var(--saffron);
	}
	.pill.ok {
		background: var(--green-bg);
		color: var(--green);
	}
	.match-note {
		padding-top: 8px;
		font-size: 14px;
		line-height: 22px;
		color: var(--on-navy-muted);
	}
	.spacer {
		height: var(--section-y);
	}

	@media (max-width: 1100px) {
		.hero {
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;
		}
		.hero-sub {
			width: auto;
			max-width: 560px;
		}
		.spot-inner {
			flex-direction: column;
			gap: 40px;
		}
		.spot-copy {
			width: auto;
		}
		.c1 {
			width: 240px;
		}
	}
	@media (max-width: 760px) {
		.thead {
			display: none;
		}
		.rows {
			border-top: 1px solid var(--navy);
		}
		.row {
			flex-wrap: wrap;
			align-items: flex-start;
			gap: 12px;
			padding-block: 24px;
		}
		.c1 {
			width: auto;
			flex: 1;
		}
		.row h2 {
			font-size: 22px;
			line-height: 28px;
		}
		.row .c4 {
			order: 2;
		}
		.row .c2,
		.row .c3 {
			order: 3;
			flex-basis: 100%;
		}
		.mobile-label {
			display: block;
			margin-bottom: 2px;
			font-size: 11px;
			line-height: 14px;
			font-weight: 600;
			letter-spacing: 0.14em;
			text-transform: uppercase;
			color: var(--muted);
		}
		.photos {
			flex-direction: column;
			padding-top: 40px;
		}
		.photos img {
			height: auto;
			aspect-ratio: 4 / 3;
			border-radius: 20px;
		}
		.match {
			padding: 20px;
		}
		.match-row {
			padding: 14px 16px;
		}
	}
</style>
