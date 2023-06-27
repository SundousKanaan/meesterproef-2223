<script lang="ts">
    import Hero from '$lib/Hero.svelte';
    import SubmittedChallenges from '$lib/submittedChallenges.svelte';
    import FeaturedCreators from '$lib/featuredCreators.svelte';
    import FeaturedWork from '$lib/featuredWork.svelte';
</script>

<Hero />

<main>
    <FeaturedWork />
    <FeaturedCreators />
</main>

<!-- <DragenDropp /> -->

<style>
    main{
        max-width:75em;
        margin: 0 auto;
        padding: 0em 2em 1em 1em;
    }
</style>