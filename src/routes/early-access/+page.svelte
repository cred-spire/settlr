<script lang="ts">
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import EmailCapture from '#lib/components/EmailCapture.svelte';
	import { images } from '#lib/site';

	const perks = [
		{ big: '3 months', text: 'completely free on any plan, no card required', accent: true },
		{ big: 'For life', text: 'your founding price stays locked, even as we add features', accent: false },
		{ big: '1:1', text: 'onboarding with the founding team and a shared Slack or WhatsApp channel', accent: false }
	];

	const steps = [
		['Step 1 · Day 0', 'Apply', 'Tell us about your team, your bill volume and the tools you use today.'],
		['Step 2 · Week 1', 'Intro call', 'A 30-minute call with a founder to map your current payment workflow.'],
		['Step 3 · Week 2', 'Set up together', "We connect your ERP and bank and import vendors — you don't touch a CSV."],
		['Step 4 · Ongoing', 'Shape the roadmap', 'Your requests go straight to the build list. Founding customers vote first.']
	];
</script>

<svelte:head>
	<title>Early access — Settlr</title>
	<meta name="description" content="Be one of our first 50 founding customers. Settlr is free for three months while we build it with you." />
</svelte:head>

<section class="wrap hero">
	<Eyebrow dot>Early access programme</Eyebrow>
	<h1 class="display">Be one of our first 50 founding customers.</h1>
	<p class="lead">
		We're onboarding a small group of Indian businesses first. You get Settlr free while we build it with you — and a say in
		what we build next.
	</p>
	<div class="capture">
		<EmailCapture id="ea-email" cta="Apply for early access" width="640px" />
	</div>
	<img src={images.earlyAccessHero} alt="A small finance team working together at a table" />
</section>

<section class="wrap offer">
	<div class="perks">
		<Eyebrow dot tone="saffron">What founding customers get</Eyebrow>
		<dl>
			{#each perks as p}
				<div class="perk">
					<dt class:accent={p.accent}>{p.big}</dt>
					<dd>{p.text}</dd>
				</div>
			{/each}
		</dl>
	</div>
	<div class="side">
		<div class="spots">
			<Eyebrow tone="warm">Spots in the first cohort</Eyebrow>
			<div>
				<p class="fifty">50</p>
				<p class="fifty-sub">businesses, onboarded in small batches</p>
			</div>
		</div>
		<div class="who">
			<Eyebrow>Who it's for</Eyebrow>
			<p>Indian businesses with 10–500 employees that pay 50+ vendor bills a month.</p>
		</div>
	</div>
</section>

<section class="wrap how">
	<div class="how-head">
		<div class="how-title">
			<p class="label">How it works</p>
			<h2>From application to your first paid bill in about two weeks.</h2>
		</div>
		<p class="how-sub">
			In return, we ask for honest feedback — a short call every couple of weeks and permission to share your story once
			you're happy.
		</p>
	</div>
	<ol class="steps">
		{#each steps as [when, title, body], i}
			<li class:last={i === steps.length - 1}>
				<span class="when">{when}</span>
				<h3>{title}</h3>
				<p>{body}</p>
			</li>
		{/each}
	</ol>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		text-align: center;
		padding-top: clamp(56px, 7.2vw, 104px);
		padding-bottom: 64px;
	}
	.hero h1 {
		max-width: 960px;
	}
	.hero .lead {
		max-width: 620px;
	}
	.capture {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		width: 100%;
	}
	.hero img {
		width: 100%;
		aspect-ratio: 1280 / 460;
		object-fit: cover;
		border-radius: 28px;
	}

	.offer {
		display: flex;
		gap: 24px;
		padding-block: 24px;
	}
	.perks {
		flex: 1;
		min-height: 440px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 40px;
		padding: 48px;
		background: var(--navy);
		border-radius: 28px;
	}
	dl {
		margin: 0;
	}
	.perk {
		display: flex;
		align-items: baseline;
		gap: 24px;
		padding-block: 22px;
		border-top: 1px solid var(--navy-line);
	}
	.perk:last-child {
		border-bottom: 1px solid var(--navy-line);
	}
	dt {
		width: 220px;
		flex-shrink: 0;
		font-size: 40px;
		line-height: 48px;
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--white);
	}
	dt.accent {
		color: var(--saffron);
	}
	dd {
		margin: 0;
		font-size: 17px;
		line-height: 26px;
		color: var(--on-navy);
	}
	.side {
		width: 400px;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.spots,
	.who {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 24px;
		padding: 36px;
		border-radius: 28px;
	}
	.spots {
		background: var(--saffron);
	}
	.fifty {
		font-size: 88px;
		line-height: 88px;
		font-weight: 600;
		letter-spacing: -0.05em;
	}
	.fifty-sub {
		margin-top: 6px;
		font-size: 16px;
		line-height: 20px;
		color: var(--saffron-text);
	}
	.who {
		background: var(--mist);
	}
	.who p {
		font-size: 20px;
		line-height: 28px;
		font-weight: 600;
		letter-spacing: -0.015em;
	}

	.how {
		display: flex;
		flex-direction: column;
		gap: 48px;
		padding-top: clamp(64px, 6.7vw, 96px);
		padding-bottom: var(--section-y);
	}
	.how-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 64px;
	}
	.how-title {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 720px;
	}
	.how-title h2 {
		font-size: clamp(30px, 3.6vw, 52px);
		line-height: 1.115;
		font-weight: 600;
		letter-spacing: -0.035em;
	}
	.how-sub {
		width: 340px;
		flex-shrink: 0;
		font-size: 16px;
		line-height: 26px;
		color: var(--muted);
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
		background: var(--mist);
	}
	.when {
		font-size: 14px;
		line-height: 18px;
		font-weight: 600;
		color: var(--saffron-ink);
	}
	.steps h3 {
		font-size: 22px;
		line-height: 28px;
		font-weight: 600;
		letter-spacing: -0.015em;
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
	.last .when {
		color: var(--saffron);
	}
	.last p {
		color: var(--on-navy-muted);
	}

	@media (max-width: 1100px) {
		.offer {
			flex-direction: column;
		}
		.side {
			width: auto;
			flex-direction: row;
		}
		.how-head {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}
		.how-sub {
			width: auto;
			max-width: 560px;
		}
		.steps {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 760px) {
		.hero {
			text-align: left;
			align-items: flex-start;
		}
		.capture {
			align-items: stretch;
		}
		.hero img {
			aspect-ratio: 4 / 3;
			border-radius: 20px;
		}
		.perks {
			min-height: 0;
			padding: 28px;
			border-radius: 24px;
		}
		.perk {
			flex-direction: column;
			gap: 4px;
			padding-block: 18px;
		}
		dt {
			width: auto;
			font-size: 32px;
			line-height: 38px;
		}
		dd {
			font-size: 16px;
			line-height: 24px;
		}
		.side {
			flex-direction: column;
		}
		.spots,
		.who {
			padding: 28px;
			border-radius: 24px;
		}
		.fifty {
			font-size: 72px;
			line-height: 72px;
		}
		.steps {
			grid-template-columns: 1fr;
		}
		.steps li {
			padding: 24px;
		}
	}
</style>
