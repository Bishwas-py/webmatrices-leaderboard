<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<div class="leaderboard-text-section">
    <h2>
        {title}
    </h2>
    <p>
        {description}
    </p>
</div>

<style>
    .leaderboard-text-section {
        @apply flex flex-col;
        @apply gap-3 sm:gap-4 md:gap-5;
        @apply pl-7 sm:pl-8 md:pl-9;
        @apply pr-2;
    }
    .leaderboard-text-section h2 {
        @apply font-medium font-noto-sans;
        @apply text-3xl sm:text-4xl md:text-5xl;
    }
    .leaderboard-text-section p {
        @apply font-noto-sans;
        @apply text-base sm:text-lg md:text-xl;
        @apply text-white/50;
        @apply max-w-2xl;
    }
</style>