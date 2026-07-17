<svelte:head>
	<title>SvelteKit</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main>
	<img
		alt="SvelteKit logo"
		src="https://github.com/diploi/component-sveltekit/raw/main/.diploi/icon.svg"
		width="64"
		height="64"
	/>

	<h1>SvelteKit</h1>

	<p>
		Your SvelteKit application is up and running! You can start editing the code in
		<code>src/routes/+page.svelte</code> to build your app. In development stage, SvelteKit
		will automatically reload as you make changes.
		<br /><br />
		<b>Install dependencies:</b><br />
		Please use <code>npm install package_name</code> to add packages to your environment.
	</p>

	<hr />

	<a href="https://diploi.com/" aria-label="Diploi">
		<img alt="Diploi logo" width="54" height="16" src="https://diploi.com/logo-white.svg" />
	</a>
</main>

<style>
	:global(*) {
		font-family: sans-serif;
		font-size: 16px;
	}

	:global(html),
	:global(body) {
		margin: 0;
		min-height: 100vh;
		background: #202328;
		color: #fff;
	}

	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 32px;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	h1 {
		font-size: 24px;
	}

	p,
	hr {
		max-width: min(400px, 100%);
	}

	p {
		text-align: center;
		opacity: 0.8;
		line-height: 1.5;
	}

	a {
		font-size: inherit;
		color: inherit;
	}

	hr {
		display: block;
		margin: 32px 0;
		width: 100%;
		height: 2px;
		background: #31363f;
		border: none;
	}

	a:last-child {
		margin-top: 32px;
	}

	code {
		font-family: monospace;
		font-size: 14px;
		background: #31363f;
		padding: 2px 4px;
		border-radius: 4px;
	}
</style>
