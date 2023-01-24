<script>
	import Fa from 'svelte-fa';
	import { faSignOut } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';
</script>

<div class="pt-1">
	<nav class="leaderboard-nav">
		<a class="leaderboard-logo-section group h-full" href="/">
			<img
				src="https://webmatrices.com/assets/favicon-ujcqy0p9.png"
				alt="logo"
				class="leaderboard-logo opacity-90 group-hover:opacity-100 group-hover:scale-110 duration-100"
			/>
			<span class="text-gray-300 group-hover:text-gray-100">Contributors</span>
		</a>
		<div class="leaderboard-nav-links gap-2">
			<a href="/scope" class="hidden sm:flex leaderboard-nav-link"
			   class:active={$page.url.pathname === '/scope'}>Scope</a>
			<a
				href="/context"
				class="hidden md:flex leaderboard-nav-link hidden sm:flex"
				class:active={$page.url.pathname === '/context'}>
				Learn Context
			</a>
			<a href="https://apps.webmatrices.com/" class="hidden lg:flex leaderboard-nav-link"
				>Web Apps</a
			>
			<a href="https://xoomato.com" class="hidden sm:flex leaderboard-nav-link">Xoomato</a>
		</div>
		<a href="https://webmatrices.com/" class="leaderboard-call-to-action group">
			<span>Get In</span>
			<Fa icon={faSignOut} class="text-gray-300 group-hover:text-gray-100" />
		</a>
	</nav>
	<nav class="px-2 sm:pl-48">
		<div class="leaderboard-nav-links gap-9">
			{#if $page.url.pathname === '/scope'}
				<a href="/scope" class="flex leaderboard-nav-link" class:active="{$page.url.pathname === '/scope'}">
					Overview
				</a>
			{:else if $page.url.pathname === '/context'}
				<a href="/context" class="flex leaderboard-nav-link" class:active={$page.url.pathname === '/context'}>Overview</a>
			{:else if $page.url.pathname === '/' || $page.url.pathname === '/honoured'}
				<a href="/" class="flex leaderboard-nav-link" class:active={$page.url.pathname === '/'}>Overview</a>
				<a href="/honoured"  class="flex leaderboard-nav-link" class:active={$page.url.pathname === '/honoured'}>
					Honour Board
				</a>
			{/if}
		</div>
	</nav>
</div>

<style>
	nav {
		@apply font-noto-sans;
		@apply h-16;
		@apply border-b-white/20 border-b;
	}
	.leaderboard-nav {
		@apply flex gap-1 sm:gap-7;
		@apply pl-1 pr-4;
		@apply border-b-white/20 border-b;
	}
	.leaderboard-logo-section {
		@apply font-ssp;
		@apply flex items-center;
		@apply align-middle px-4;
		@apply gap-2 hover:cursor-pointer;
		@apply focus:outline focus:outline-dotted focus:outline-gray-100 outline-1;
	}
	.leaderboard-logo {
		@apply h-5;
	}
	.leaderboard-logo-section span {
		@apply font-medium;
		@apply text-lg;
	}

	.leaderboard-nav-links {
		@apply flex justify-start items-start;
		@apply h-full;
	}

	.leaderboard-nav-link {
		@apply whitespace-nowrap;
		@apply font-normal;
		@apply text-gray-300;
		@apply hover:text-gray-100;
		@apply transition-colors;
		@apply duration-300;
		@apply h-full px-3;
		@apply items-center;
        @apply duration-300;

		@apply focus:text-gray-100;
		@apply focus:outline focus:outline-dotted focus:outline-gray-100 outline-1;
	}

	.leaderboard-nav-link.active {
		@apply text-green-500;
		@apply border-b border-green-500;
	}

	.leaderboard-call-to-action {
		@apply whitespace-nowrap;
		@apply font-medium ml-auto gap-3;
		@apply text-gray-300;
		@apply hover:text-gray-100;
		@apply transition-colors;
		@apply duration-300;
		@apply h-full px-3;
		@apply flex items-center;

		@apply focus:text-gray-100;
		@apply focus:outline focus:outline-dotted focus:outline-gray-100 outline-1;
	}
</style>
