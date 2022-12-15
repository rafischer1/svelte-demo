<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
     <h1>Svelte Chat</h1>
		<div class="chat-box">
			<h3>Chat 1 Header</h3>
			<div class="chat-body">Body</div>
			<div class="chat-input">
				<div>🐼</div>
				<input />
				<button>Do it</button>
			</div>
			<h4>Chat Footer</h4>
		</div>
	</main>

	<footer>
		<h5>Svelte Chat Footer</h5>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.chat-box {
		border: 5px double black;
		width: 50%;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.chat-body {
		background: rgba(240, 239, 239, 0.9);
		border: 1px solid rgba(240, 239, 239, 0.7);
		margin: 3px 10px 3px 15px;
		border-radius: 5px;
		padding: 5%;
	}

	.chat-input {
		display: flex;
		margin: auto;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5px;
		border-top: 1px solid black;
		background-color: #252a2a;
		color: white;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 8px 0;
		}
	}
</style>
