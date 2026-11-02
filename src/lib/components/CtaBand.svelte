<section class="wrap outer">
	<div class="band">
		<div class="copy">
			<h2 class="h2">Work smarter. Close sooner.</h2>
			<p>Hand the repetitive work to Settlr and give your team back the hours that matter.</p>
		</div>
		<div class="actions">
			<a class="btn btn-navy big" href="/early-access">Get started free</a>
			<a class="btn btn-outline-strong big" href="/pricing">Talk to sales</a>
		</div>
		<span class="ring" aria-hidden="true"></span>
	</div>
</section>

<style>
	.outer {
		padding-bottom: var(--section-y);
	}
	.band {
		position: relative;
		overflow: clip;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 64px;
		background: var(--saffron);
		border-radius: 32px;
		padding: clamp(32px, 5vw, 72px);
	}
	.copy {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 720px;
		color: var(--navy);
	}
	.copy p {
		font-size: clamp(16px, 1.32vw, 19px);
		line-height: 1.58;
		color: var(--saffron-text);
	}
	.actions {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 12px;
		flex-shrink: 0;
	}
	.big {
		padding: 18px 32px;
		font-size: 17px;
		line-height: 22px;
	}
	.ring {
		position: absolute;
		right: -60px;
		bottom: -120px;
		width: 360px;
		height: 360px;
		border-radius: 50%;
		border: 56px solid #0b1d3614;
	}
	@media (max-width: 900px) {
		.band {
			flex-direction: column;
			align-items: stretch;
			gap: 32px;
			border-radius: 24px;
		}
		.ring {
			width: 240px;
			height: 240px;
			border-width: 40px;
			right: -80px;
			bottom: -80px;
		}
	}
</style>
