<script lang="ts">
    export let title: string;
    export let count: string;
</script>

<div class="leaderboard-counter">
    <div class="number">{count}</div>
    <div class="title">{title.toUpperCase()}</div>
    <div class="comment-message">{'<!--'}showValues</div>
    <div class="comment-hyphen">{'-'.repeat(150)}</div>
    <div class="comment-stroke">{'>'}</div>
</div>


<style>
    .leaderboard-counter {
        @apply flex flex-row;
        @apply text-gray-50/10;
        font-family: Consolas, monospace;
    }
    .comment-message {
        @apply whitespace-nowrap;
        @apply hidden sm:block;
    }
    .number {
        @apply mr-7;
        @apply text-gray-50/20;
    }
    .title {
        @apply mr-3;
        @apply text-gray-50/25;
    }
    .comment-hyphen {
        @apply truncate;
    }
</style>