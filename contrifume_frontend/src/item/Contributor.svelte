<script lang="ts">
    import {faLocationPin, faMap, faMapMarked, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import type {Contributor} from "$lib/interfaces";

    export let contributor: Contributor;
    export let index: number;
</script>

<a href="/" on:click|preventDefault class="contributor" class:challenger={contributor.status === 'challenger'}>
    <div class="contributor-icon">
        <img src="{contributor.image}" alt="{contributor.name}" title="{contributor.name}">
        <div class="rank-circle">
            <span>{index}</span>
        </div>
    </div>
    <div class="contributor-info">
        {#if contributor.location}
            <div class="contributor-location">
                <span><Fa icon="{faMapMarked}" size="sm"/></span>
                <span>{contributor.location}</span>
            </div>
        {/if}
        <h3>{contributor.name}</h3>
        <p>Joined <strong>{contributor.joined_in}</strong></p>
    </div>
</a>


<style>
    .contributor {
        @apply flex flex-row;
        @apply gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-9;
        @apply duration-75;
        @apply px-5 py-4;
        @apply select-none cursor-crosshair;
        @apply focus:bg-stone-900/50;
    }
    .contributor.challenger {
        @apply outline outline-1 outline-gray-200/70;
        @apply hover:outline-2 hover:outline-green-500/90;
        @apply focus:outline-2 focus:outline-green-500/90;
    }
    .contributor.challenger .rank-circle {
        @apply bg-green-600;
        @apply border-2 border-green-700;
        @apply text-green-50;
        @apply shadow;
    }
    .contributor-icon {
        @apply flex flex-row shrink-0;
        @apply gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-9;
        @apply relative;
    }
    .contributor-icon img {
        @apply rounded-full;
        @apply w-24 h-24;
        @apply object-cover;
    }
    .rank-circle {
        @apply absolute;
        @apply top-0 left-0;
        @apply flex flex-row;
        @apply justify-center items-center;
        @apply w-7 h-7;
        @apply rounded-full;
        @apply text-green-900;
        @apply bg-white;
        @apply font-normal;
        @apply text-base;
        @apply drop-shadow-2xl;
        @apply border border-green-900;
    }
    .contributor-info {
        @apply pt-3;
    }
    .contributor-info h3 {
        @apply font-medium font-noto-sans;
        @apply text-2xl sm:text-3xl md:text-4xl;
    }
    .contributor-info p {
        @apply font-normal font-noto-sans;
        @apply text-base sm:text-lg md:text-xl;
        @apply mt-1;
    }
    .contributor-location {
        @apply flex flex-row;
        @apply gap-2;
        @apply text-xs sm:text-sm md:text-base;
        @apply font-normal font-noto-sans;
        @apply text-gray-300;
    }
</style>