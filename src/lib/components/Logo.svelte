<script lang="ts">
	let { inverse = false, size = 'md' }: { inverse?: boolean; size?: 'md' | 'sm' } = $props();
</script>

<span class="logo" class:inverse class:sm={size === 'sm'}>
	<!-- Mark: an "S" drawn as a single payment flow that lands on a saffron dot — settled. -->
	<svg class="mark" viewBox="0 0 32 32" aria-hidden="true">
		<rect class="tile" width="32" height="32" rx="9" />
		<path
			class="flow"
			d="M21.5 9H14a3.5 3.5 0 0 0 0 7h4a3.5 3.5 0 0 1 0 7h-3"
			fill="none"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<circle class="dot" cx="10.5" cy="23" r="2.25" />
	</svg>
	<span class="word">settlr</span>
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 10px;
	}
	.mark {
		display: block;
		width: 30px;
		height: 30px;
		flex-shrink: 0;
	}
	.tile {
		fill: var(--navy);
	}
	.flow {
		stroke: var(--white);
	}
	.dot {
		fill: var(--saffron);
	}
	.word {
		font-size: 22px;
		line-height: 28px;
		font-weight: 700;
		letter-spacing: -0.035em;
		color: var(--navy);
	}
	.inverse .tile {
		fill: var(--white);
	}
	.inverse .flow {
		stroke: var(--navy);
	}
	.inverse .word {
		color: var(--white);
	}
	.sm {
		gap: 8px;
	}
	.sm .mark {
		width: 26px;
		height: 26px;
	}
	.sm .word {
		font-size: 20px;
		line-height: 24px;
	}
</style>
