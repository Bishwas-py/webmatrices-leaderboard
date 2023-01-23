<script>
	import '$styles/app.postcss';
	import '$fonts/styles/play-fair.css';
	import '$fonts/styles/combo.css';
	import '$fonts/styles/lato.css';
	import '$fonts/styles/source-sans-pro.css';
	import '$fonts/styles/inter.css';
	import '$fonts/styles/dancing-script.css';
	import '$fonts/styles/poppins.css';
	import '$fonts/styles/noto-sans.css';
	import NavBar from '../item/NavBar.svelte';
</script>

<svelte:head>
	<title>WhiteHat Leaderboard | Webmatrices</title>
</svelte:head>

<div class="leaderboard-container">
	<NavBar />
	<slot />
</div>

<style>
	.leaderboard-container {
		@apply min-h-screen w-screen;
		@apply bg-primary;
		@apply text-white;
	}
</style>
