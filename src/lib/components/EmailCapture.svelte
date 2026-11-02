<script lang="ts">
	let {
		cta = 'Get started',
		width = '520px',
		id = 'email'
	}: { cta?: string; width?: string; id?: string } = $props();

	let email = $state('');
	let status = $state<'idle' | 'error' | 'done'>('idle');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
		status = ok ? 'done' : 'error';
		// TODO: send `email` to your waitlist / CRM endpoint here.
	}
</script>

<form class="capture" style="--w: {width}" onsubmit={submit} novalidate>
	<label class="sr-only" for={id}>Your work email</label>
	<input
		{id}
		type="email"
		placeholder="Your work email"
		autocomplete="email"
		bind:value={email}
		oninput={() => (status = 'idle')}
		aria-invalid={status === 'error'}
		aria-describedby="{id}-msg"
	/>
	<button class="btn btn-saffron" type="submit">{cta}</button>
</form>
<p id="{id}-msg" class="msg" class:error={status === 'error'} aria-live="polite">
	{#if status === 'error'}Enter a valid work email, like name@company.in.{/if}
	{#if status === 'done'}Thanks — we'll email {email} within one working day.{/if}
</p>

<style>
	.capture {
		display: flex;
		align-items: center;
		gap: 8px;
		width: min(100%, var(--w));
		background: var(--white);
		border: 1px solid var(--line);
		border-radius: 999px;
		padding: 6px 6px 6px 22px;
		transition: border-color 0.15s ease;
	}
	.capture:focus-within {
		border-color: var(--navy);
	}
	input {
		flex: 1;
		min-width: 0;
		border: 0;
		outline: 0;
		background: transparent;
		font-size: 16px;
		line-height: 20px;
		color: var(--ink);
	}
	input::placeholder {
		color: var(--placeholder);
	}
	button {
		padding: 14px 24px;
		font-size: 16px;
		line-height: 20px;
	}
	.msg {
		min-height: 0;
		font-size: 14px;
		line-height: 18px;
		color: var(--muted);
	}
	.msg:empty {
		display: none;
	}
	.msg.error {
		color: #b42318;
	}
	@media (max-width: 480px) {
		.capture {
			flex-direction: column;
			align-items: stretch;
			border-radius: 20px;
			padding: 6px;
		}
		input {
			padding: 14px 16px;
		}
	}
</style>
