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
	<div class="content-container">
		<slot />
	</div>
</div>

<style>
	.leaderboard-container {
		@apply min-h-screen w-screen;
		@apply bg-primary;
		@apply text-white;
	}
	.content-container {
		@apply px-7 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36;
		@apply py-10;
		@apply w-full h-full;
	}
</style>
