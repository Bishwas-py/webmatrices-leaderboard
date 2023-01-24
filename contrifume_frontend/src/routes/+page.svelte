<script>
    import CountSnippet from "../item/CountSnippet.svelte";
    import TextSection from "../item/TextSection.svelte";
    import Contributor from "../item/Contributor.svelte";

    let contributors = [
        {
            contributor_name: "Sushil Phuyal",
            contributor_image: "https://avatars.githubusercontent.com/u/63364111?v=4",
            contributor_status: "challenger",
            joined_in: "April 2021",
        },
        {
            contributor_name: "Basant Karki",
            contributor_image: "https://avatars.githubusercontent.com/u/60461905?v=4",
            contributor_status: "challenger",
            joined_in: "January 2021",
        },
        {
            contributor_name: "Bishwas Bhandari",
            contributor_image: "https://avatars.githubusercontent.com/u/42182303?v=4",
            joined_in: "January 2021",
        }
    ]
</script>

<div class="content-box">
    <CountSnippet title="CHAMPIONS" count="{1}"/>
    <TextSection title="0x0A Leaderboard" description="These are the Bug Hunter A-listers. Learn from their reports and successes by viewing their profile."/>
    <div class="contributor-box">
        {#each contributors as contributor}
            <Contributor contributor_name="{contributor.contributor_name}" contributor_image="{contributor.contributor_image}" joined_in="{contributor.joined_in}" contributor_status="{contributor.contributor_status}"/>
        {/each}
    </div>
</div>


<style>
    .content-box {
        @apply flex flex-col max-w-[90rem] mx-auto;
        @apply gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-9;
    }
    .contributor-box {
        @apply grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3;
        @apply gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-9;
    }
</style>