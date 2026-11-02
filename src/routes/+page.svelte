<script lang="ts">
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Check from '#lib/components/Check.svelte';
	import EmailCapture from '#lib/components/EmailCapture.svelte';
	import { images } from '#lib/site';

	const bills = [
		{ initials: 'KL', name: 'Kaveri Logistics', meta: 'Freight · GST verified', amount: '₹2,10,000' },
		{ initials: 'MP', name: 'Marina Packaging', meta: 'Matched to PO-1184', amount: '₹1,64,850' },
		{ initials: 'CW', name: 'Coastline Workspace', meta: 'Rent · Recurring', amount: '₹1,07,500' }
	];

	const tools = ['Tally', 'Zoho Books', 'NetSuite', 'SAP', 'Slack', 'Gmail', 'WhatsApp', 'UPI'];

	const products = [
		['Corporate cards', 'Physical and virtual cards for every employee, with limits set before anyone swipes.'],
		['Accounts payable', 'Capture vendor bills, match them to POs and pay in bulk from your bank.'],
		['Procurement', 'Raise, approve and track purchase requests before money leaves the account.'],
		['Reimbursements', 'Employees snap a receipt; you approve and repay the same week.'],
		['UPI for business', 'Let teams pay small vendors over UPI while every transaction stays on the books.'],
		['GST input credit', "Spot mismatches with GSTR-2B early so eligible credit isn't left unclaimed."]
	];

	const benefits = [
		{
			icon: 'sync',
			title: 'Syncs with your accounting software',
			body: 'Two-way sync with Tally, Zoho Books and other ERPs. Bills, vendors and payments stay up to date without re-typing.'
		},
		{
			icon: 'card',
			title: 'Spending rules that enforce themselves',
			body: 'Give out as many cards as you need, each with its own limit per person and category — plus cashback every month.'
		},
		{
			icon: 'spark',
			title: 'Invoices read by AI, not by people',
			body: 'Forward bills from email, WhatsApp or Slack. Settlr pulls out vendor, amount, GST and due date automatically.'
		},
		{
			icon: 'bank',
			title: 'Pay straight from your bank',
			body: 'Connect your current account and send single, bulk or part payments without logging into net banking.'
		}
	];

	const aiTabs = [
		{
			title: 'AI across finance ops',
			body: 'Bring AI into everyday finance work — coding expenses, flagging duplicates and answering spend questions in plain English.'
		},
		{
			title: 'Approvals with a full audit trail',
			body: 'Every request is routed to the right approver, and every decision is logged with who, what and when.'
		},
		{
			title: 'Accounting on autopilot',
			body: 'Expenses are categorised, tax-coded and posted to your ledger as they happen, not at month end.'
		},
		{
			title: 'Connected banking',
			body: 'See balances across your current accounts and pay vendors without switching to net banking.'
		}
	];
	let activeTab = $state(0);

	const chips = ['Process invoices', 'Match POs', 'Route approvals', 'Claim ITC', 'Close books faster'];

	const security = [
		{ icon: 'lock', title: 'Encrypted end to end', body: 'Data is encrypted in transit and at rest, with bank details stored separately.' },
		{ icon: 'globe', title: 'Your data stays in India', body: 'Hosted on Indian servers, in line with local data-protection rules.' },
		{ icon: 'doc', title: 'Every action logged', body: 'Role-based access and a full audit trail of who approved what, and when.' }
	];
</script>

<svelte:head>
	<title>Settlr — Business payments for Indian SMEs</title>
	<meta name="description" content="Cards, vendor payments, purchasing and employee claims — run from a single platform, with AI doing the data entry." />
</svelte:head>

{#snippet icon(name: string, size = 22)}
	<svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="var(--saffron)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		{#if name === 'sync'}<path d="M4 7h12l-3-3M20 17H8l3 3" />
		{:else if name === 'card'}<rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" />
		{:else if name === 'spark'}<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
		{:else if name === 'bank'}<path d="M3 10l9-6 9 6M5 10v8M19 10v8M9.5 10v8M14.5 10v8M3 20h18" />
		{:else if name === 'lock'}<rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" />
		{:else if name === 'globe'}<circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.5 2.5 2.5 13.5 0 16M12 4c-2.5 2.5-2.5 13.5 0 16" />
		{:else if name === 'doc'}<path d="M6 4h9l3 3v13H6z" /><path d="M9 11h6M9 15h6" />
		{/if}
	</svg>
{/snippet}

<!-- Hero -->
<section class="wrap hero">
	<div class="hero-copy">
		<Eyebrow dot>Business payments for Indian SMEs</Eyebrow>
		<h1 class="display">Every rupee your business spends, in one calm place.</h1>
		<p class="lead hero-lead">
			Cards, vendor payments, purchasing and employee claims — run from a single platform, with AI doing the data entry.
		</p>
		<div class="hero-form">
			<EmailCapture id="hero-email" />
			<ul class="ticks">
				<li><Check />Book a payables demo</li>
				<li><Check />Apply for a card in minutes</li>
			</ul>
		</div>
	</div>

	<div class="hero-visual">
		<span class="glow" aria-hidden="true"></span>
		<div class="approval">
			<div class="approval-head">
				<span class="approval-label">Awaiting your approval</span>
				<span class="approval-count">3 bills</span>
			</div>
			<p class="approval-total">₹4,82,350</p>
			<ul class="bills">
				{#each bills as bill}
					<li>
						<span class="avatar">{bill.initials}</span>
						<span class="bill-text">
							<strong>{bill.name}</strong>
							<span>{bill.meta}</span>
						</span>
						<span class="bill-amount">{bill.amount}</span>
					</li>
				{/each}
			</ul>
			<div class="approval-actions">
				<button class="approve">Approve &amp; pay all</button>
				<button class="review">Review</button>
			</div>
		</div>
		<div class="cashback">
			<span class="cashback-icon"><Check color="var(--saffron)" width={2} /></span>
			Cashback credited on card spend
		</div>
	</div>
</section>

<!-- Works with -->
<section class="tools">
	<div class="wrap tools-inner">
		<p class="label tools-label">Works with the tools you already use</p>
		<ul class="tools-list">
			{#each tools as tool}<li>{tool}</li>{/each}
		</ul>
	</div>
</section>

<!-- Platform -->
<section class="wrap platform">
	<div class="platform-intro">
		<p class="label">One platform</p>
		<h2 class="h3">Stop stitching together six tools to pay your bills.</h2>
		<p class="body-lg">
			Settlr brings every outgoing payment under one roof, so your finance team sees the full picture without chasing spreadsheets.
		</p>
		<div class="btn-row">
			<a class="btn btn-navy" href="/early-access">Get a demo</a>
			<a class="btn btn-outline" href="/pricing">Apply for a card</a>
		</div>
		<img class="platform-photo" src={images.homeLedger} alt="A ledger and calculator on a desk" loading="lazy" />
	</div>
	<ol class="product-list">
		{#each products as [title, body], i}
			<li>
				<span class="num">{String(i + 1).padStart(2, '0')}</span>
				<h3>{title}</h3>
				<p>{body}</p>
			</li>
		{/each}
	</ol>
</section>

<!-- Why Settlr -->
<section class="why">
	<div class="wrap">
		<div class="why-head">
			<div class="why-title">
				<p class="label">Why Settlr</p>
				<h2 class="h2">Less clicking. Fewer surprises. Books that close themselves.</h2>
			</div>
			<p class="body-lg why-sub">
				The busywork runs quietly in the background, so your team can spend its time on decisions.
			</p>
		</div>
		<div class="benefit-grid">
			{#each benefits as b}
				<article class="benefit">
					<span class="icon-tile">{@render icon(b.icon)}</span>
					<h3>{b.title}</h3>
					<p>{b.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Intelligence -->
<section class="ai">
	<div class="wrap">
		<div class="ai-head">
			<Eyebrow dot tone="saffron">Settlr Intelligence</Eyebrow>
			<h2 class="h2">A finance co-pilot that works the way your team already does.</h2>
		</div>
		<div class="ai-body">
			<div class="ai-tabs" role="tablist" aria-label="Settlr Intelligence features">
				{#each aiTabs as tab, i}
					<button
						role="tab"
						class="ai-tab"
						class:active={activeTab === i}
						aria-selected={activeTab === i}
						onclick={() => (activeTab = i)}
					>
						<span class="ai-tab-title">{tab.title}</span>
						{#if activeTab === i}<span class="ai-tab-body">{tab.body}</span>{/if}
					</button>
				{/each}
			</div>
			<div class="chat">
				<p class="bubble-user">How much did we spend on travel in September, and is anything over policy?</p>
				<div class="reply">
					<span class="bot"><span></span></span>
					<div class="bubble-bot">
						<p>
							Travel came to <strong>₹3,48,200</strong> across 41 transactions — 12% below August. Two items need a look:
						</p>
						<ul>
							<li><span>Hotel, Mumbai · 3 nights</span><strong>₹4,500 over limit</strong></li>
							<li><span>Flight booked without approval</span><strong>Needs review</strong></li>
						</ul>
					</div>
				</div>
				<ul class="chips">
					{#each chips as chip}<li>{chip}</li>{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Security -->
<section class="wrap security">
	<div class="security-intro">
		<p class="label">Security from day one</p>
		<h2 class="h3">Built to hold your company's money.</h2>
		<p class="sec-sub">Security isn't a later add-on. These protections are built into Settlr from the very first release.</p>
	</div>
	<div class="security-cols">
		{#each security as s}
			<article>
				<span class="icon-tile big">{@render icon(s.icon, 24)}</span>
				<h3>{s.title}</h3>
				<p>{s.body}</p>
			</article>
		{/each}
	</div>
</section>

<!-- Founder -->
<section class="wrap founder">
	<div class="founder-head">
		<p class="label">Why we're building Settlr</p>
		<h2 class="h2">Finance teams deserve better than WhatsApp approvals and Excel.</h2>
	</div>
	<div class="founder-row">
		<article class="note">
			<img src={images.homeFounder} alt="Portrait of the Settlr founder" loading="lazy" />
			<div class="note-body">
				<blockquote>
					We've watched small and mid-sized Indian businesses lose days every month to chasing bills, matching receipts and
					fixing GST mismatches. Settlr is our attempt to give them the finance tooling large companies take for granted — at a
					price that makes sense for an SME.
				</blockquote>
				<div class="signoff">
					<span class="fn">FN</span>
					<span>
						<strong>Founder name</strong>
						<span>Co-founder &amp; CEO, Settlr</span>
					</span>
				</div>
			</div>
		</article>
		<aside class="founding">
			<Eyebrow dot tone="saffron">Founding customers</Eyebrow>
			<h3>Join early. Shape the product.</h3>
			<ul>
				<li><Check color="var(--saffron)" />Free for the first 3 months</li>
				<li><Check color="var(--saffron)" />Founding price locked in for life</li>
				<li><Check color="var(--saffron)" />A direct line to the founders</li>
			</ul>
			<a class="btn btn-saffron" href="/early-access">Apply for early access</a>
		</aside>
	</div>
</section>

<style>
	/* Hero */
	.hero {
		display: flex;
		align-items: center;
		gap: 64px;
		padding-top: clamp(48px, 6vw, 88px);
		padding-bottom: clamp(56px, 6.7vw, 96px);
	}
	.hero-copy {
		display: flex;
		flex-direction: column;
		gap: 28px;
		width: 600px;
		flex-shrink: 0;
	}
	.hero-lead {
		max-width: 520px;
	}
	.hero-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding-top: 8px;
	}
	.ticks {
		display: flex;
		flex-wrap: wrap;
		gap: 12px 24px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.ticks li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		line-height: 18px;
		color: var(--muted);
	}
	.hero-visual {
		position: relative;
		overflow: clip;
		flex: 1;
		min-width: 0;
		height: 560px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px;
		background: var(--navy);
		border-radius: 28px;
	}
	.glow {
		position: absolute;
		top: -80px;
		right: -80px;
		width: 280px;
		height: 280px;
		border-radius: 50%;
		background: radial-gradient(circle, #f5b53d59 0%, #f5b53d00 70%);
	}
	.approval {
		position: relative;
		width: 440px;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: 24px;
		background: var(--white);
		border-radius: 20px;
		box-shadow: 0 24px 60px #00000040;
	}
	.approval-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.approval-label {
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.approval-count {
		font-size: 13px;
		font-weight: 600;
	}
	.approval-total {
		font-size: 36px;
		line-height: 44px;
		font-weight: 600;
		letter-spacing: -0.03em;
	}
	.bills {
		margin: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--line);
	}
	.bills li {
		display: flex;
		align-items: center;
		gap: 14px;
		padding-block: 14px;
		border-bottom: 1px solid var(--mist);
	}
	.bills li:last-child {
		border-bottom: 0;
	}
	.avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		flex-shrink: 0;
		border-radius: 10px;
		background: var(--mist);
		font-size: 13px;
		font-weight: 700;
	}
	.bill-text {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.bill-text strong {
		font-size: 15px;
		line-height: 18px;
		font-weight: 600;
	}
	.bill-text span {
		font-size: 13px;
		line-height: 16px;
		color: var(--muted);
	}
	.bill-amount {
		font-size: 15px;
		font-weight: 600;
		text-align: right;
		flex-shrink: 0;
	}
	.approval-actions {
		display: flex;
		gap: 10px;
	}
	.approve,
	.review {
		padding: 13px 18px;
		border-radius: 12px;
		font-size: 15px;
		line-height: 18px;
		font-weight: 600;
	}
	.approve {
		flex: 1;
		background: var(--navy);
		color: var(--white);
	}
	.review {
		border: 1px solid var(--line);
	}
	.cashback {
		position: absolute;
		left: 28px;
		bottom: 32px;
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 18px 12px 12px;
		background: var(--saffron);
		border-radius: 999px;
		rotate: -3deg;
		transform-origin: 0 0;
		font-size: 14px;
		line-height: 18px;
		font-weight: 600;
	}
	.cashback-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: var(--navy);
	}

	/* Tools strip */
	.tools {
		border-block: 1px solid var(--line);
	}
	.tools-inner {
		display: flex;
		align-items: center;
		gap: 48px;
		padding-block: 32px;
	}
	.tools-label {
		width: 180px;
		flex-shrink: 0;
		line-height: 18px;
	}
	.tools-list {
		flex: 1;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px 28px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.tools-list li {
		font-size: 20px;
		line-height: 24px;
		font-weight: 600;
		color: var(--muted);
	}

	/* Platform */
	.platform {
		display: flex;
		gap: 80px;
		padding-block: var(--section-y);
	}
	.platform-intro {
		display: flex;
		flex-direction: column;
		gap: 24px;
		width: 440px;
		flex-shrink: 0;
	}
	.btn-row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		padding-top: 8px;
	}
	.platform-photo {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 24px;
	}
	.product-list {
		flex: 1;
		margin: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--navy);
	}
	.product-list li {
		display: flex;
		align-items: baseline;
		gap: 24px;
		padding-block: 26px;
		border-bottom: 1px solid var(--line);
	}
	.num {
		width: 40px;
		flex-shrink: 0;
		font-size: 14px;
		font-weight: 600;
		color: var(--saffron-ink);
	}
	.product-list h3 {
		width: 260px;
		flex-shrink: 0;
		font-size: 24px;
		line-height: 30px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}
	.product-list p {
		flex: 1;
		font-size: 16px;
		line-height: 25px;
		color: var(--muted);
	}

	/* Why */
	.why {
		background: var(--mist);
		padding-block: var(--section-y);
	}
	.why-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 80px;
		margin-bottom: 64px;
	}
	.why-title {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 720px;
	}
	.why-sub {
		width: 360px;
		flex-shrink: 0;
	}
	.benefit-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		border-radius: 24px;
		overflow: clip;
	}
	.benefit {
		display: flex;
		flex-direction: column;
		gap: 16px;
		min-height: 250px;
		padding: 40px;
		background: var(--white);
	}
	.benefit h3 {
		padding-top: 12px;
		font-size: 26px;
		line-height: 32px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}
	.benefit p {
		max-width: 480px;
		font-size: 16px;
		line-height: 26px;
		color: var(--muted);
	}

	/* AI */
	.ai {
		background: var(--navy);
		color: var(--white);
		padding-block: var(--section-y);
	}
	.ai-head {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 760px;
		margin-bottom: 56px;
	}
	.ai-body {
		display: flex;
		gap: 48px;
	}
	.ai-tabs {
		display: flex;
		flex-direction: column;
		width: 420px;
		flex-shrink: 0;
	}
	.ai-tab {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 24px 0 24px 24px;
		border-left: 2px solid var(--navy-line);
		text-align: left;
		transition: border-color 0.2s ease;
	}
	.ai-tab-title {
		font-size: 22px;
		line-height: 28px;
		font-weight: 500;
		letter-spacing: -0.02em;
		color: var(--on-navy-faint);
	}
	.ai-tab:hover .ai-tab-title {
		color: var(--on-navy-muted);
	}
	.ai-tab.active {
		border-left-color: var(--saffron);
	}
	.ai-tab.active .ai-tab-title {
		color: var(--white);
		font-weight: 600;
	}
	.ai-tab-body {
		font-size: 16px;
		line-height: 25px;
		color: var(--on-navy-muted);
	}
	.chat {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 40px;
		background: var(--navy-2);
		border-radius: 24px;
	}
	.bubble-user {
		align-self: flex-end;
		max-width: 440px;
		padding: 16px 20px;
		background: var(--saffron);
		color: var(--navy);
		border-radius: 18px 18px 4px 18px;
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
	}
	.reply {
		display: flex;
		align-items: flex-start;
		gap: 14px;
	}
	.bot {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		flex-shrink: 0;
		border-radius: 10px;
		background: var(--white);
	}
	.bot span {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--saffron);
	}
	.bubble-bot {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 20px;
		background: var(--navy-3);
		border-radius: 4px 18px 18px 18px;
		font-size: 16px;
		line-height: 24px;
		color: var(--on-navy);
	}
	.bubble-bot strong {
		color: var(--white);
		font-weight: 600;
	}
	.bubble-bot ul {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.bubble-bot li {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		padding: 12px 14px;
		background: var(--navy-2);
		border-radius: 10px;
		font-size: 15px;
		line-height: 18px;
	}
	.bubble-bot li strong {
		color: var(--saffron);
		flex-shrink: 0;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 0;
		padding: 8px 0 0;
		list-style: none;
	}
	.chips li {
		padding: 8px 14px;
		border: 1px solid var(--navy-line);
		border-radius: 999px;
		font-size: 14px;
		line-height: 18px;
		color: var(--on-navy-muted);
	}

	/* Security */
	.security {
		display: flex;
		gap: 80px;
		padding-top: var(--section-y);
		padding-bottom: 40px;
	}
	.security-intro {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 380px;
		flex-shrink: 0;
	}
	.sec-sub {
		font-size: 16px;
		line-height: 26px;
		color: var(--muted);
	}
	.security-cols {
		flex: 1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border-top: 1px solid var(--navy);
	}
	.security-cols article {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 32px 28px 0;
		border-left: 1px solid var(--line);
	}
	.security-cols article:first-child {
		padding-left: 0;
		border-left: 0;
	}
	.security-cols article:last-child {
		padding-right: 0;
	}
	.icon-tile.big {
		width: 56px;
		height: 56px;
		border-radius: 16px;
	}
	.security-cols h3 {
		font-size: 20px;
		line-height: 24px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}
	.security-cols p {
		font-size: 15px;
		line-height: 24px;
		color: var(--muted);
	}

	/* Founder */
	.founder {
		display: flex;
		flex-direction: column;
		gap: 56px;
		padding-bottom: var(--section-y);
	}
	.founder-head {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding-top: 80px;
		border-top: 1px solid var(--line);
	}
	.founder-head h2 {
		max-width: 1100px;
	}
	.founder-row {
		display: flex;
		gap: 24px;
	}
	.note {
		flex: 1;
		display: flex;
		gap: 40px;
		padding: 40px;
		background: var(--mist);
		border-radius: 24px;
	}
	.note img {
		width: 240px;
		height: 320px;
		flex-shrink: 0;
		object-fit: cover;
		border-radius: 18px;
	}
	.note-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 32px;
	}
	blockquote {
		margin: 0;
		font-size: 20px;
		line-height: 32px;
		font-weight: 500;
		letter-spacing: -0.015em;
	}
	.signoff {
		display: flex;
		align-items: center;
		gap: 14px;
	}
	.signoff > span:last-child {
		display: flex;
		flex-direction: column;
		gap: 2px;
		font-size: 14px;
		line-height: 18px;
		color: var(--muted);
	}
	.signoff strong {
		font-size: 16px;
		line-height: 20px;
		color: var(--ink);
	}
	.fn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--navy);
		color: var(--white);
		font-weight: 600;
	}
	.founding {
		width: 480px;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 40px;
		background: var(--navy);
		border-radius: 24px;
		color: var(--white);
	}
	.founding h3 {
		font-size: 32px;
		line-height: 38px;
		font-weight: 600;
		letter-spacing: -0.025em;
	}
	.founding ul {
		display: flex;
		flex-direction: column;
		gap: 14px;
		margin: 0;
		padding: 8px 0;
		list-style: none;
	}
	.founding li {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 15px;
		line-height: 18px;
		color: var(--on-navy);
	}

	/* Responsive */
	@media (max-width: 1200px) {
		.hero {
			flex-direction: column;
			align-items: stretch;
		}
		.hero-copy {
			width: auto;
			max-width: 640px;
		}
		.platform,
		.security {
			flex-direction: column;
			gap: 48px;
		}
		.platform-intro,
		.security-intro {
			width: auto;
			max-width: 600px;
		}
		.platform-photo {
			max-width: 440px;
		}
		.founder-row {
			flex-direction: column;
		}
		.founding {
			width: auto;
		}
		.ai-body {
			flex-direction: column;
		}
		.ai-tabs {
			width: auto;
		}
	}
	@media (max-width: 900px) {
		.why-head {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
			margin-bottom: 40px;
		}
		.why-sub {
			width: auto;
		}
		.benefit-grid {
			grid-template-columns: 1fr;
		}
		.benefit {
			min-height: 0;
			padding: 28px;
		}
		.benefit h3 {
			font-size: 22px;
			line-height: 28px;
			padding-top: 4px;
		}
		.product-list li {
			flex-wrap: wrap;
			gap: 8px 16px;
			padding-block: 20px;
		}
		.product-list h3 {
			width: auto;
			flex: 1;
			font-size: 20px;
			line-height: 26px;
		}
		.product-list p {
			flex-basis: 100%;
			padding-left: 56px;
		}
		.security-cols {
			grid-template-columns: 1fr;
		}
		.security-cols article,
		.security-cols article:first-child,
		.security-cols article:last-child {
			flex-direction: row;
			flex-wrap: wrap;
			align-items: center;
			padding: 24px 0;
			border-left: 0;
			border-bottom: 1px solid var(--line);
		}
		.security-cols p {
			flex-basis: 100%;
		}
		.note {
			flex-direction: column;
			padding: 24px;
		}
		.note img {
			width: 100%;
			height: auto;
			aspect-ratio: 4 / 3;
		}
		blockquote {
			font-size: 17px;
			line-height: 28px;
		}
		.founding {
			padding: 28px;
		}
		.founding h3 {
			font-size: 26px;
			line-height: 32px;
		}
		.founder-head {
			padding-top: 56px;
		}
		.tools-inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}
		.tools-label {
			width: auto;
		}
		.tools-list {
			justify-content: flex-start;
		}
		.tools-list li {
			font-size: 17px;
		}
	}
	@media (max-width: 640px) {
		.hero-visual {
			height: auto;
			min-height: 420px;
			padding: 20px 16px 88px;
			border-radius: 22px;
		}
		.approval {
			padding: 18px;
		}
		.approval-total {
			font-size: 30px;
			line-height: 38px;
		}
		.cashback {
			left: 16px;
			bottom: 24px;
			font-size: 13px;
		}
		.chat {
			padding: 20px;
		}
		.bubble-bot li {
			flex-direction: column;
			gap: 6px;
		}
		.ai-tab-title {
			font-size: 19px;
			line-height: 24px;
		}
	}
</style>
