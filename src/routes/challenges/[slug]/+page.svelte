<script>
	import Participants from '$lib/Participants.svelte';
    import Timeline from '$lib/Timeline.svelte';
	import ChallengeInfo from '$lib/challengeInfo.svelte';
    import CtaSection from '$lib/ctaSection.svelte';
    import HeroSlider from '$lib/heroSlider.svelte';
	import PrizesSection from '$lib/prizesSection.svelte';
</script>

<HeroSlider />

<ChallengeInfo />

<section>
    <Timeline />
</section>

<CtaSection />

<PrizesSection />

<Participants />

<style>
    section {
        margin: 0 auto;
        width: 80%;
    }
</style>