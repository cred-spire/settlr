<script lang="ts">
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import { images } from '#lib/site';

	const groups = [
		{
			tag: 'Spend',
			title: 'Let teams buy what they need',
			dark: false,
			items: [
				['Corporate cards', 'Virtual and physical cards with per-person limits and monthly cashback.'],
				['Reimbursements', 'Receipts in, claims approved, money back — usually within days.'],
				['UPI for business', 'Scan-and-pay for small vendors, with every payment tagged and tracked.']
			]
		},
		{
			tag: 'Payables',
			title: 'Pay vendors on time, every time',
			dark: true,
			items: [
				['Accounts payable', 'AI invoice capture, PO matching and bulk payouts from your bank.'],
				['Procurement', 'Purchase requests and approvals before a single rupee is committed.'],
				['Vendor management', 'PAN, GSTIN and bank checks on every vendor, kept in one directory.']
			]
		},
		{
			tag: 'Control',
			title: 'Know where every rupee went',
			dark: false,
			items: [
				['Budgets', 'Set budgets by team or project and see burn in real time.'],
				['GST input credit', 'Reconcile against GSTR-2B and chase vendors for missing filings.'],
				['Connected banking', 'Balances and payouts across your current accounts, in one view.']
			]
		}
	];

	const steps = [
		['Capture', 'Bills arrive by email, WhatsApp or upload. AI reads every field.'],
		['Match & check', 'Auto-matched to POs, duplicate-checked and GST-verified.'],
		['Approve', 'Routed to the right people on mobile, email or Slack — with a timestamped trail.'],
		['Pay & sync', 'Paid from your bank and posted to your ERP automatically.']
	];

	const integrations = ['Tally', 'Zoho Books', 'Oracle NetSuite', 'SAP', 'Slack', 'Gmail', 'WhatsApp'];
</script>

<svelte:head>
	<title>Product — Settlr</title>
	<meta name="description" content="Nine products that share one ledger, one approval engine and one view of your spend." />
</svelte:head>

<section class="wrap hero">
	<Eyebrow dot>The Settlr platform</Eyebrow>
	<h1 class="display">Every way money leaves your business, finally connected.</h1>
	<p class="lead">
		Nine products that share one ledger, one approval engine and one view of your spend. Start with one, add the rest when
		you're ready.
	</p>
	<img src={images.productHero} alt="The Settlr dashboard on a laptop" />
</section>

<section class="wrap groups">
	{#each groups as g}
		<article class="group" class:dark={g.dark}>
			<p class="tag">{g.tag}</p>
			<h2>{g.title}</h2>
			<ul>
				{#each g.items as [name, desc]}
					<li>
						<h3>{name}</h3>
						<p>{desc}</p>
					</li>
				{/each}
			</ul>
		</article>
	{/each}
</section>

<section class="flow">
	<div class="wrap">
		<div class="flow-head">
			<p class="label">How a bill moves through Settlr</p>
			<h2 class="h2">From inbox to ledger in four steps.</h2>
		</div>
		<ol class="steps">
			{#each steps as [title, body], i}
				<li class:last={i === steps.length - 1}>
					<span class="n">{i + 1}</span>
					<h3>{title}</h3>
					<p>{body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="wrap integrations">
	<div class="int-copy">
		<p class="label">Integrations</p>
		<h2>Works with the tools you already run on.</h2>
	</div>
	<ul>
		{#each integrations as name}<li>{name}</li>{/each}
		<li class="bank">+ Your bank</li>
	</ul>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		text-align: center;
		padding-top: clamp(56px, 7.2vw, 104px);
		padding-bottom: 72px;
	}
	.hero h1 {
		max-width: 980px;
	}
	.hero .lead {
		max-width: 640px;
	}
	.hero img {
		width: 100%;
		aspect-ratio: 1280 / 520;
		object-fit: cover;
		border-radius: 28px;
	}

	.groups {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		padding-top: 24px;
		padding-bottom: var(--section-y);
	}
	.group {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 32px;
		background: var(--mist);
		border-radius: 24px;
	}
	.tag {
		padding-bottom: 4px;
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.group h2 {
		padding-bottom: 20px;
		font-size: 28px;
		line-height: 34px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}
	.group ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.group li {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding-block: 18px;
		border-top: 1px solid var(--line);
	}
	.group h3 {
		font-size: 18px;
		line-height: 22px;
		font-weight: 600;
	}
	.group li p {
		font-size: 15px;
		line-height: 23px;
		color: var(--muted);
	}
	.group.dark {
		background: var(--navy);
		color: var(--white);
	}
	.dark .tag {
		color: var(--saffron);
	}
	.dark li {
		border-top-color: var(--navy-line);
	}
	.dark li p {
		color: var(--on-navy-muted);
	}

	.flow {
		background: var(--mist);
		padding-block: var(--section-y);
	}
	.flow-head {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 760px;
		margin-bottom: 56px;
	}
	.steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
		border-radius: 24px;
		overflow: clip;
	}
	.steps li {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 32px;
		background: var(--white);
	}
	.n {
		font-size: 44px;
		line-height: 54px;
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--saffron-ink);
	}
	.steps h3 {
		font-size: 20px;
		line-height: 24px;
		font-weight: 600;
	}
	.steps p {
		font-size: 15px;
		line-height: 24px;
		color: var(--muted);
	}
	.steps li.last {
		background: var(--navy);
		color: var(--white);
	}
	.last .n {
		color: var(--saffron);
	}
	.last p {
		color: var(--on-navy-muted);
	}

	.integrations {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 64px;
		padding-block: clamp(64px, 6.7vw, 96px);
	}
	.int-copy {
		display: flex;
		flex-direction: column;
		gap: 16px;
		width: 440px;
		flex-shrink: 0;
	}
	.int-copy h2 {
		font-size: clamp(28px, 2.5vw, 36px);
		line-height: 1.17;
		font-weight: 600;
		letter-spacing: -0.03em;
	}
	.integrations ul {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 12px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.integrations li {
		padding: 14px 22px;
		border: 1px solid var(--line);
		border-radius: 14px;
		font-size: 16px;
		line-height: 20px;
		font-weight: 600;
	}
	.integrations li.bank {
		background: var(--navy);
		border-color: var(--navy);
		color: var(--white);
	}

	@media (max-width: 1100px) {
		.groups {
			grid-template-columns: 1fr;
		}
		.steps {
			grid-template-columns: 1fr 1fr;
		}
		.integrations {
			flex-direction: column;
			align-items: flex-start;
			gap: 32px;
		}
		.int-copy {
			width: auto;
		}
		.integrations ul {
			justify-content: flex-start;
		}
	}
	@media (max-width: 640px) {
		.hero {
			text-align: left;
			align-items: flex-start;
		}
		.hero img {
			aspect-ratio: 4 / 3;
			border-radius: 20px;
		}
		.group {
			padding: 24px;
		}
		.group h2 {
			font-size: 24px;
			line-height: 30px;
		}
		.steps {
			grid-template-columns: 1fr;
		}
		.steps li {
			padding: 24px;
		}
		.flow-head {
			margin-bottom: 36px;
		}
	}
</style>
