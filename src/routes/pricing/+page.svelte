<script lang="ts">
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Check from '#lib/components/Check.svelte';
	import { slide } from 'svelte/transition';

	let billing = $state<'monthly' | 'yearly'>('yearly');

	// Design shows the yearly rate. Monthly assumes "2 months free" = yearly is 10/12 of monthly.
	const inr = (n: number) => '₹' + n.toLocaleString('en-IN');
	const price = (yearlyRate: number) => (billing === 'yearly' ? yearlyRate : Math.round((yearlyRate * 12) / 10));

	const plans = [
		{
			name: 'Essentials',
			blurb: 'For small teams moving off spreadsheets.',
			rate: 7999,
			cta: 'Start free trial',
			includesLabel: 'Includes',
			features: ['Up to 100 bills a month', 'AI invoice capture', 'Single-level approvals', 'Tally & Zoho Books sync', 'Unlimited users'],
			featured: false
		},
		{
			name: 'Growth',
			blurb: 'For finance teams running payables at scale.',
			rate: 15999,
			cta: 'Start free trial',
			includesLabel: 'Everything in Essentials, plus',
			features: ['Up to 1,000 bills a month', 'PO matching & procurement', 'Multi-level approval rules', 'GST input credit reconciliation', 'Connected bank payouts'],
			featured: true
		},
		{
			name: 'Enterprise',
			blurb: 'For multi-entity groups with complex controls.',
			rate: null,
			cta: 'Talk to sales',
			includesLabel: 'Everything in Growth, plus',
			features: ['Unlimited bills', 'Multiple entities & GSTINs', 'SAP / NetSuite integration', 'SSO & custom roles', 'Dedicated success manager'],
			featured: false
		}
	];

	// Only the first answer comes from the design; the rest are placeholder copy — replace before launch.
	const faqs = [
		['Do you charge per user?', 'No. Every plan includes unlimited users, so approvers, employees and your CA can all be added at no extra cost.'],
		['What counts as a bill?', 'Any vendor invoice processed through accounts payable. Card transactions and reimbursement claims don’t count towards your limit.'],
		['Can I switch plans later?', 'Yes. Upgrades apply straight away; downgrades take effect at the end of your current billing period.'],
		['Are prices inclusive of GST?', 'No. Prices are exclusive of 18% GST, which is added to your invoice and can be claimed as input credit.'],
		['How long does onboarding take?', 'Most teams pay their first bill through Settlr within two weeks. We connect your ERP and bank and import your vendors for you.']
	];
	let openFaq = $state<number | null>(0);
</script>

<svelte:head>
	<title>Pricing — Settlr</title>
	<meta name="description" content="Flat monthly pricing, no per-user fees, and a 14-day free trial on every plan. Cards are always free." />
</svelte:head>

<section class="wrap hero">
	<Eyebrow dot>Pricing</Eyebrow>
	<h1 class="display">Simple plans. Cards are always free.</h1>
	<p class="lead">Flat monthly pricing for the software, no per-user fees, and a 14-day free trial on every plan.</p>
	<div class="toggle" role="radiogroup" aria-label="Billing period">
		<button role="radio" aria-checked={billing === 'monthly'} class:on={billing === 'monthly'} onclick={() => (billing = 'monthly')}>
			Monthly
		</button>
		<button role="radio" aria-checked={billing === 'yearly'} class:on={billing === 'yearly'} onclick={() => (billing = 'yearly')}>
			Yearly <span class="badge">2 months free</span>
		</button>
	</div>
</section>

<section class="wrap plans">
	{#each plans as plan}
		<article class="plan" class:featured={plan.featured}>
			{#if plan.featured}<span class="rec">Recommended</span>{/if}
			<div class="plan-head">
				<h2>{plan.name}</h2>
				<p>{plan.blurb}</p>
			</div>
			<div class="price">
				{#if plan.rate}
					<span class="amount">{inr(price(plan.rate))}</span>
					<span class="per">/ month{billing === 'yearly' ? ', billed yearly' : ''}</span>
				{:else}
					<span class="amount">Custom</span>
				{/if}
			</div>
			<a class="btn {plan.featured ? 'btn-saffron' : 'btn-outline-strong'}" href="/early-access">{plan.cta}</a>
			<div class="features">
				<p class="inc">{plan.includesLabel}</p>
				<ul>
					{#each plan.features as f}
						<li><Check color={plan.featured ? 'var(--saffron)' : 'var(--navy)'} />{f}</li>
					{/each}
				</ul>
			</div>
		</article>
	{/each}
</section>

<section class="wrap">
	<div class="cards-banner">
		<div class="cb-left">
			<span class="mini-card" aria-hidden="true"><span></span></span>
			<div>
				<h2>Settlr corporate cards — free on every plan</h2>
				<p>No issuance fee, no annual fee, cashback credited monthly on card spend.</p>
			</div>
		</div>
		<a class="btn btn-navy" href="/early-access">Apply for cards</a>
	</div>
</section>

<section class="wrap faq">
	<div class="faq-intro">
		<p class="label">FAQ</p>
		<h2 class="h3">Questions, answered.</h2>
		<p class="faq-sub">Still unsure which plan fits? Our team will size it with you in a 20-minute call.</p>
	</div>
	<div class="faq-list">
		{#each faqs as [q, a], i}
			{@const open = openFaq === i}
			<div class="faq-item">
				<h3>
					<button aria-expanded={open} aria-controls="faq-{i}" onclick={() => (openFaq = open ? null : i)}>
						<span>{q}</span>
						<span class="sign" aria-hidden="true">{open ? '−' : '+'}</span>
					</button>
				</h3>
				{#if open}
					<p id="faq-{i}" transition:slide={{ duration: 200 }}>{a}</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		text-align: center;
		padding-top: clamp(56px, 7.2vw, 104px);
		padding-bottom: 56px;
	}
	.hero h1 {
		max-width: 900px;
	}
	.hero .lead {
		max-width: 600px;
	}
	.toggle {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 4px;
		background: var(--mist);
		border-radius: 999px;
	}
	.toggle button {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 20px;
		border-radius: 999px;
		font-size: 14px;
		line-height: 18px;
		font-weight: 500;
		color: var(--muted);
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
	}
	.toggle button.on {
		background: var(--white);
		color: var(--navy);
		font-weight: 600;
		box-shadow: 0 1px 3px #0b1d361f;
	}
	.badge {
		padding: 2px 8px;
		background: var(--saffron);
		border-radius: 999px;
		font-size: 12px;
		line-height: 16px;
		font-weight: 700;
		color: var(--navy);
	}

	.plans {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		padding-top: 24px;
	}
	.plan {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 28px;
		padding: 36px;
		border: 1px solid var(--line);
		border-radius: 24px;
	}
	.plan.featured {
		background: var(--navy);
		border-color: var(--navy);
		color: var(--white);
	}
	.rec {
		position: absolute;
		top: 24px;
		right: 24px;
		padding: 6px 12px;
		background: var(--saffron);
		border-radius: 999px;
		font-size: 12px;
		line-height: 16px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--navy);
	}
	.plan-head {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.plan-head h2 {
		font-size: 22px;
		line-height: 28px;
		font-weight: 600;
	}
	.plan-head p {
		font-size: 15px;
		line-height: 23px;
		color: var(--muted);
	}
	.featured .plan-head p,
	.featured .per {
		color: var(--on-navy-muted);
	}
	.price {
		display: flex;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 6px;
	}
	.amount {
		font-size: clamp(40px, 3.6vw, 52px);
		line-height: 64px;
		font-weight: 600;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums;
	}
	.per {
		font-size: 15px;
		line-height: 18px;
		color: var(--muted);
	}
	.features {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding-top: 24px;
		border-top: 1px solid var(--mist);
	}
	.featured .features {
		border-top-color: var(--navy-line);
	}
	.inc {
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.featured .inc {
		color: var(--on-navy-faint);
	}
	.features ul {
		display: flex;
		flex-direction: column;
		gap: 14px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.features li {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 15px;
		line-height: 18px;
	}

	.cards-banner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
		margin-top: 20px;
		padding: 32px 36px;
		background: var(--saffron);
		border-radius: 24px;
	}
	.cb-left {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	.mini-card {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		width: 84px;
		height: 54px;
		flex-shrink: 0;
		padding: 8px;
		background: var(--navy);
		border-radius: 10px;
	}
	.mini-card span {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--saffron);
	}
	.cards-banner h2 {
		font-size: 22px;
		line-height: 28px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}
	.cards-banner p {
		margin-top: 4px;
		font-size: 15px;
		line-height: 20px;
		color: var(--saffron-text);
	}
	.cards-banner .btn {
		flex-shrink: 0;
	}

	.faq {
		display: flex;
		gap: 80px;
		padding-block: var(--section-y);
	}
	.faq-intro {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 380px;
		flex-shrink: 0;
	}
	.faq-sub {
		font-size: 16px;
		line-height: 26px;
		color: var(--muted);
	}
	.faq-list {
		flex: 1;
		border-top: 1px solid var(--navy);
	}
	.faq-item {
		border-bottom: 1px solid var(--line);
	}
	.faq-item h3 {
		margin: 0;
	}
	.faq-item button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		width: 100%;
		padding-block: 26px;
		text-align: left;
		font-size: 20px;
		line-height: 24px;
		font-weight: 600;
	}
	.sign {
		font-size: 24px;
		line-height: 30px;
		font-weight: 400;
	}
	.faq-item p {
		max-width: 720px;
		padding-bottom: 26px;
		margin-top: -14px;
		font-size: 16px;
		line-height: 26px;
		color: var(--muted);
	}

	@media (max-width: 1100px) {
		.plans {
			grid-template-columns: 1fr;
			max-width: 560px;
		}
		.cards-banner {
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;
		}
		.faq {
			flex-direction: column;
			gap: 40px;
		}
		.faq-intro {
			width: auto;
		}
	}
	@media (max-width: 640px) {
		.hero {
			text-align: left;
			align-items: flex-start;
		}
		.plan {
			padding: 28px;
		}
		.cards-banner {
			padding: 24px;
		}
		.cb-left {
			flex-direction: column;
			align-items: flex-start;
			gap: 16px;
		}
		.faq-item button {
			font-size: 17px;
			line-height: 22px;
			padding-block: 20px;
		}
	}
</style>
