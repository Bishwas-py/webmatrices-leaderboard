<script>
    import CountSnippet from "../item/CountSnippet.svelte";
    import TextSection from "../item/TextSection.svelte";
</script>

<div class="content-box">
    <CountSnippet title="CHAMPIONS" count="{1}"/>
    <TextSection title="0x0A Leaderboard" description="These are the Bug Hunter A-listers. Learn from their reports and successes by viewing their profile."/>
</div>

<style>
    .content-box {
        @apply flex flex-col;
        @apply gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-9;
    }
</style>