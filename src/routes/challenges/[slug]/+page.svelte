<script>
	import Participants from '$lib/Participants.svelte';
    import Timeline from '$lib/Timeline.svelte';
	import ChallengeInfo from '$lib/challengeInfo.svelte';
    import CtaSection from '$lib/ctaSection.svelte';
    import HeroSlider from '$lib/heroSection.svelte';
	import PrizesSection from '$lib/prizesSection.svelte';
	import InviteModal from '$lib/inviteModal.svelte';
	import EnrollModal from '$lib/enrollModal.svelte';

	let showInviteModal = false;
	let showEnrollModal = false;

	function closeModal() {
		showInviteModal = false;
		showEnrollModal = false;
	}

	function handleInviteModal() {
		showInviteModal = true;
	}

	function handleEnrollModal() {
		showEnrollModal = true;
	}
</script>

<HeroSlider 
	on:openModal={handleInviteModal} 
	on:openEnrollModal={handleEnrollModal} 
/>

<EnrollModal {showEnrollModal} {closeModal} />

<InviteModal {showInviteModal} {closeModal} />

<ChallengeInfo />

<section>
    <Timeline dates={
        [
            {
			date: new Date('2023-06-01'),
			icon: 'profile',
			title: 'Submission Start'
		},
		{
			date: new Date('2023-06-10'),
			icon: 'document',
			title: 'Submission Deadline'
		},
		{
			date: new Date('2023-06-22'),
			icon: 'profile',
			title: 'Evaluation'
		},
		{
			date: new Date('2023-06-28'),
			icon: 'trend',
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