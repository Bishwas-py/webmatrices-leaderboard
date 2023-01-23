<script lang="ts">
    export let contributor_name: string;
    export let contributor_image: string;
    export let joined_in: string;
</script>

<div class="contributor">
    <div class="contributor-icon">
        <img src="{contributor_image}" alt="{contributor_name}" title="{contributor_name}">
        <div class="rank-circle">
            <span>1</span>
        </div>
    </div>
    <div class="contributor-info">
        <h3>{contributor_name}</h3>
        <p>Joined <strong>{joined_in}</strong></p>
    </div>
</div>


<style>
    .contributor {
        @apply flex flex-row;
        @apply gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-9;
        @apply outline outline-1 outline-gray-200/70;
        @apply hover:outline-2 hover:outline-green-500/90;
        @apply duration-75;
        @apply px-5 py-4;
    }
    .contributor-icon {
        @apply flex flex-row;
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
        @apply shadow-2xl;
    }
    .contributor-info h3 {
        @apply font-medium font-noto-sans;
        @apply text-2xl sm:text-3xl md:text-4xl;
        @apply mt-5;
    }
    .contributor-info p {
        @apply font-normal font-noto-sans;
        @apply text-base sm:text-lg md:text-xl;
        @apply mt-1;
    }
</style>