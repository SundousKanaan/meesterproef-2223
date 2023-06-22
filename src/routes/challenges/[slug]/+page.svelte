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
    <Timeline dates={
        [
            {
			date: new Date('2023-06-01'),
			icon: 'icon-1',
			title: 'Submission Start'
		},
		{
			date: new Date('2023-06-10'),
			icon: 'icon-2',
			title: 'Submission Deadline'
		},
		{
			date: new Date('2023-06-22'),
			icon: 'icon-3',
			title: 'Evaluation'
		},
		{
			date: new Date('2023-06-28'),
			icon: 'icon-4',
			title: 'Winners Announced'
		}
        ]
    } />
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