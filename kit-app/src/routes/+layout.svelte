<script>
	import Header from './Header.svelte';
	import ChatContainer from '../components/chat/chat-container.svelte'
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
     <h1>Svelte Chat</h1>
		<ChatContainer />
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

	@media (min-width: 480px) {
		footer {
			padding: 8px 0;
		}
	}
</style>
